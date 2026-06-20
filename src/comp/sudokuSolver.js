// Sudoku backtracking solver.
// JavaScript port of Krenar Shabani's original C++ algorithm
// (https://github.com/KrenarShabani/sudokuSolver — Non_GUI/driver.cpp).
// The board is a 9x9 array of integers, where 0 represents an empty cell.

// Returns true if `value` can legally be placed at board[row][col].
// Mirrors the C++ `check()`: scans the 3x3 box, the row, and the column.
function isValid(board, row, col, value) {
  // 3x3 box check
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[boxRow + i][boxCol + j] === value) {
        return false;
      }
    }
  }
  // row + column check
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === value) return false;
    if (board[i][col] === value) return false;
  }
  return true;
}

// Recursively fills the board cell by cell (the C++ `processSudoku()`),
// skipping cells that were provided by the user. Mutates `board` in place.
function solveFrom(board, given, index) {
  if (index === 81) {
    return true; // every cell filled — solved
  }
  const row = Math.floor(index / 9);
  const col = index % 9;

  if (given[row][col]) {
    return solveFrom(board, given, index + 1); // fixed clue — move on
  }

  for (let value = 1; value <= 9; value++) {
    if (isValid(board, row, col, value)) {
      board[row][col] = value;
      if (solveFrom(board, given, index + 1)) {
        return true;
      }
      board[row][col] = 0; // backtrack
    }
  }
  return false;
}

// Validates that the given clues don't already violate Sudoku rules.
function hasValidClues(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const value = board[row][col];
      if (value !== 0) {
        board[row][col] = 0;
        const ok = isValid(board, row, col, value);
        board[row][col] = value;
        if (!ok) return false;
      }
    }
  }
  return true;
}

// Public entry point. Takes a 9x9 grid (0 = empty) and returns
// { solved: boolean, board: number[][] }. Does not mutate the input.
export function solveSudoku(input) {
  const board = input.map((row) => row.slice());
  const given = input.map((row) => row.map((cell) => cell !== 0));

  if (!hasValidClues(board)) {
    return { solved: false, board };
  }
  const solved = solveFrom(board, given, 0);
  return { solved, board };
}

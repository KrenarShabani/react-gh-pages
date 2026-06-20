import React, { useState } from "react"
import { solveSudoku } from "./sudokuSolver"

const EMPTY = () => Array.from({ length: 9 }, () => Array(9).fill(0))

// A well-known hard puzzle, used for the "load example" button.
const EXAMPLE = [
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 6, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 9, 0, 2, 0, 0],
  [0, 5, 0, 0, 0, 7, 0, 0, 0],
  [0, 0, 0, 0, 4, 5, 7, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 3, 0],
  [0, 0, 1, 0, 0, 0, 0, 6, 8],
  [0, 0, 8, 5, 0, 0, 0, 1, 0],
  [0, 9, 0, 0, 0, 0, 4, 0, 0],
]

function Sudoku() {
  const [grid, setGrid] = useState(EMPTY)
  // tracks which cells the user typed, so solved cells render differently
  const [given, setGiven] = useState(() =>
    Array.from({ length: 9 }, () => Array(9).fill(false))
  )
  const [status, setStatus] = useState(
    "// enter a puzzle or load the example, then run solve()"
  )
  const [solving, setSolving] = useState(false)

  const handleChange = (r, c, raw) => {
    const value = raw.replace(/[^1-9]/g, "").slice(-1) // last digit 1-9 only
    const next = grid.map((row) => row.slice())
    next[r][c] = value === "" ? 0 : Number(value)
    setGrid(next)
    const g = given.map((row) => row.slice())
    g[r][c] = value !== ""
    setGiven(g)
  }

  const handleSolve = () => {
    setSolving(true)
    setStatus("$ solving...")
    // defer so the "solving" state can paint before the (synchronous) solve
    setTimeout(() => {
      const { solved, board } = solveSudoku(grid)
      if (solved) {
        setGrid(board)
        setStatus("> solved ✓")
      } else {
        setStatus("> no solution exists for this puzzle ✗")
      }
      setSolving(false)
    }, 20)
  }

  const handleClear = () => {
    setGrid(EMPTY())
    setGiven(Array.from({ length: 9 }, () => Array(9).fill(false)))
    setStatus("// cleared")
  }

  const handleExample = () => {
    setGrid(EXAMPLE.map((row) => row.slice()))
    setGiven(EXAMPLE.map((row) => row.map((cell) => cell !== 0)))
    setStatus("// loaded example puzzle — run solve()")
  }

  return (
    <div className="sudoku">
      <p className="comment">
        {"// a backtracking solver, ported from my C++ original to run live in your browser"}
      </p>

      <div className="sudoku-board">
        {grid.map((row, r) =>
          row.map((cell, c) => (
            <input
              key={`${r}-${c}`}
              className={
                "sudoku-cell" +
                (c % 3 === 2 && c !== 8 ? " border-right" : "") +
                (r % 3 === 2 && r !== 8 ? " border-bottom" : "") +
                (given[r][c] ? " given" : cell !== 0 ? " solved" : "")
              }
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={cell === 0 ? "" : cell}
              onChange={(e) => handleChange(r, c, e.target.value)}
            />
          ))
        )}
      </div>

      <div className="sudoku-controls">
        <button className="term-btn primary" onClick={handleSolve} disabled={solving}>
          solve()
        </button>
        <button className="term-btn" onClick={handleExample} disabled={solving}>
          example
        </button>
        <button className="term-btn" onClick={handleClear} disabled={solving}>
          clear
        </button>
      </div>

      <p className="sudoku-status">{status}</p>
    </div>
  )
}

export default Sudoku

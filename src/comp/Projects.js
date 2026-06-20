import React from "react"

const PROJECTS = [
  {
    title: "Sudoku Solver",
    tags: ["C++", "C#", "JavaScript"],
    body:
      "A backtracking Sudoku solver I wrote in C++, later wrapped in a C# " +
      "Windows Forms GUI. I ported the core algorithm to JavaScript so you " +
      "can run it right here on this site.",
    actions: [
      { label: "▶ try it live", tab: "Sudoku", primary: true },
      {
        label: "github ↗",
        href: "https://github.com/KrenarShabani/sudokuSolver",
      },
    ],
  },
  {
    title: "Unity WebGL Game",
    tags: ["C#", "Unity"],
    body:
      "A game I built in Unity and compiled to WebGL so it runs in the " +
      "browser. Playable on this page — no install required.",
    actions: [{ label: "▶ play", tab: "Game", primary: true }],
  },
  {
    title: "This Portfolio",
    tags: ["React", "SCSS"],
    body:
      "A single-page React app with a terminal-inspired theme. The Sudoku " +
      "solver above runs entirely client-side.",
    actions: [
      {
        label: "source ↗",
        href: "https://github.com/KrenarShabani/react-gh-pages",
      },
    ],
  },
]

function Projects(props) {
  return (
    <div className="projects">
      <p className="comment">{"// projects — ls ./work"}</p>
      <div className="project-grid">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.title}>
            <h3>{p.title}</h3>
            <div className="tags">
              {p.tags.map((t) => (
                <span className="skill-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <p>{p.body}</p>
            <div className="card-actions">
              {p.actions.map((a) =>
                a.href ? (
                  <a
                    key={a.label}
                    className="term-btn"
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {a.label}
                  </a>
                ) : (
                  <button
                    key={a.label}
                    className={"term-btn" + (a.primary ? " primary" : "")}
                    onClick={(e) => props.handle(e, a.tab)}
                  >
                    {a.label}
                  </button>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

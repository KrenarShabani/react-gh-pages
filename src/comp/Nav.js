import React from "react"

const TABS = [
  { value: "Home", label: "~/home" },
  { value: "About", label: "~/about" },
  { value: "Projects", label: "~/projects" },
  { value: "Sudoku", label: "~/sudoku" },
  { value: "Game", label: "~/game" },
  { value: "Contact", label: "~/contact" },
]

function Nav(props) {
  return (
    <header className="navbar">
      <div className="nav-brand">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="nav-title">krenar@portfolio: ~</span>
      </div>
      <nav className="nav-tabs">
        {TABS.map((t) => (
          <button
            key={t.value}
            className={"nav-tab" + (props.page === t.value ? " active" : "")}
            onClick={(e) => props.handle(e, t.value)}
          >
            {t.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Nav

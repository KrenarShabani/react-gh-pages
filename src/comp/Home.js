import React, { useState, useEffect } from "react"

// Lines "typed" into the terminal hero on load.
const LINES = [
  { cmd: "whoami", out: "Krenar Shabani" },
  { cmd: "cat role.txt", out: "Software Engineer" },
  {
    cmd: "cat about.txt",
    out:
      "I build software and have loved programming since I was a teenager. " +
      "C++, C#, JavaScript & React.",
  },
]

function Home(props) {
  const [typed, setTyped] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    // Build the full script, then reveal it character by character.
    const script = LINES.map((l) => `$ ${l.cmd}\n${l.out}`).join("\n\n")
    let i = 0
    const id = setInterval(() => {
      i++
      setTyped(script.slice(0, i))
      if (i >= script.length) {
        clearInterval(id)
        setDone(true)
      }
    }, 22)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="home">
      <pre className="hero-terminal">
        {typed}
        <span className={"cursor" + (done ? " blink" : "")}>█</span>
      </pre>

      {done && (
        <div className="hero-cta fade-in">
          <button
            className="term-btn primary"
            onClick={(e) => props.handle(e, "Projects")}
          >
            ./view-projects
          </button>
          <button
            className="term-btn"
            onClick={(e) => props.handle(e, "Contact")}
          >
            ./contact
          </button>
        </div>
      )}
    </div>
  )
}

export default Home

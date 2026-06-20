import React, { useRef, useState } from "react"

// CheerpJ is loaded lazily (it's a multi-MB WASM JVM) and initialised once
// per page. We cache the init promise so repeated tab visits reuse it.
let cheerpjReady = null

function loadCheerpJ() {
  if (cheerpjReady) return cheerpjReady
  cheerpjReady = new Promise((resolve, reject) => {
    if (window.cheerpjInit) {
      resolve()
      return
    }
    const s = document.createElement("script")
    s.src = "https://cjrtnc.leaningtech.com/3.0/cj3loader.js"
    s.onload = () => resolve()
    s.onerror = () => reject(new Error("Could not load the CheerpJ runtime"))
    document.body.appendChild(s)
  }).then(() => window.cheerpjInit())
  return cheerpjReady
}

function StudentApp() {
  const displayRef = useRef(null)
  const [status, setStatus] = useState("idle") // idle | loading | running | error

  const launch = async () => {
    setStatus("loading")
    try {
      await loadCheerpJ()
      // Build the virtual-FS path to the JAR. CheerpJ mounts the web host
      // root at /app/, so a jar served at <host><PUBLIC_URL>/StudentGUI.jar
      // lives at /app<PUBLIC_URL>/StudentGUI.jar.
      const pub = (process.env.PUBLIC_URL || "").replace(/\/$/, "")
      const jarPath = "/app" + pub + "/StudentGUI.jar"

      // Clear any previous display, then mount a fresh one.
      if (displayRef.current) displayRef.current.innerHTML = ""
      window.cheerpjCreateDisplay(-1, -1, displayRef.current)
      setStatus("running")
      await window.cheerpjRunMain("Main", jarPath)
    } catch (e) {
      console.error(e)
      setStatus("error")
    }
  }

  return (
    <div className="student-app">
      <p className="comment">
        {"// my Java/Swing final project, running in-browser via a WASM JVM (CheerpJ)"}
      </p>

      {status === "idle" && (
        <div className="java-launch">
          <p>
            This is my original <span className="accent">Java</span> desktop app
            — the actual compiled bytecode, running in your browser. It loads a
            Java runtime on demand, so give it a few seconds after launching.
          </p>
          <button className="term-btn primary" onClick={launch}>
            ▶ launch java app
          </button>
        </div>
      )}

      {status === "loading" && (
        <p className="sudoku-status">$ booting java runtime... (first load can take a moment)</p>
      )}
      {status === "error" && (
        <p className="sudoku-status">
          {"> failed to start the Java runtime — check your connection and try again, or view the source on GitHub."}
        </p>
      )}

      <div
        ref={displayRef}
        className="java-display"
        style={{ display: status === "running" ? "block" : "none" }}
      />
    </div>
  )
}

export default StudentApp

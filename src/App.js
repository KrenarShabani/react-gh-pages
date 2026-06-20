import React, { Component } from "react"
import "./App.scss"
import { Helmet } from "react-helmet"
import Unity, { UnityContent } from "react-unity-webgl"

import Nav from "./comp/Nav"
import Home from "./comp/Home"
import AboutMe from "./comp/AboutMe"
import Projects from "./comp/Projects"
import Sudoku from "./comp/Sudoku"
import Contact from "./comp/Contact"
import Footer from "./comp/Footer"

const TITLE = "Krenar Shabani — Software Engineer"

class App extends Component {
  constructor() {
    super()
    this.state = { page: "Home", fade: false }
    // Unity content is created once; the game only mounts on the Game tab.
    this.unityContent = new UnityContent(
      "Build/web7.json",
      "Build/UnityLoader.js"
    )
  }

  Handler = (e, page) => {
    if (page === this.state.page) return
    // brief fade-out, swap content, fade back in
    this.setState({ fade: true })
    setTimeout(() => this.setState({ page, fade: false }), 150)
  }

  renderPage() {
    switch (this.state.page) {
      case "About":
        return <AboutMe />
      case "Projects":
        return <Projects handle={this.Handler} />
      case "Sudoku":
        return <Sudoku />
      case "Game":
        return (
          <div className="game">
            <p className="comment">{"// unity webgl build — loads in-browser"}</p>
            <div className="game-frame">
              <Unity unityContent={this.unityContent} />
            </div>
          </div>
        )
      case "Contact":
        return <Contact />
      case "Home":
      default:
        return <Home handle={this.Handler} />
    }
  }

  render() {
    return (
      <div className="webbackground">
        <Helmet>
          <title>{TITLE}</title>
          <meta
            name="description"
            content="Krenar Shabani — Software Engineer. Projects, an interactive Sudoku solver, and a Unity game."
          />
        </Helmet>

        <Nav handle={this.Handler} page={this.state.page} />

        <main className="terminal-window">
          <div className={"terminal-body" + (this.state.fade ? " fade" : "")}>
            {this.renderPage()}
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}

export default App

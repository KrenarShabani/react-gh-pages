import React, {Component} from "react"
import "./App.css"

class App extends Component {
  constructor(){
    super()

    this.state = {
      isLoggedIn : false
    }
  }
  
  loginBtn = () => {
    this.setState(prevState => {
      return {
        isLoggedIn : !prevState.isLoggedIn
      }
    })
  }

  render(){

    return(
      <div>
        <h1>Logged {this.state.isLoggedIn ? "in" : "out"}</h1>
        <input
          type = "button"
          value = {this.state.isLoggedIn ? "Logout" : "Login"}
          onClick={() => this.loginBtn()}
        />
      </div>
    )
  }
} export default App

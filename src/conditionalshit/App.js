import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
  constructor() {
    super()

    this.state = {
      isLoading:true, 

      unreadMessages:[
        "Call ur mum",
        "some spam"
      ]
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    },1500)
  }


  render() {
    return(
      <div>
        <Conditional isLoading = {this.state.isLoading}/>

        {
          this.state.unreadMessages.length > 0 &&
          <h2> you have {this.state.unreadMessages.length} unread Messages! </h2>
        }
      </div>
    )
  }
}

export default App

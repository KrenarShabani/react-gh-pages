import React, {Component} from "react"

class App extends Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    
  }

  static getDerivedStateFromProps(props, state){
    //return the new, updated state based upon the props
    //probably dont need it - says the react dev team
    //specific case:
    //  takes incomming props from parent, set own state from those props
    //generally discouraged to use
  }

  getSnapshotBeforeUpdate(){
    //create a backup of the curent way things are
    //not common to use
  }

  componentWillReceiveProps(nextProps){ //deprecated
    if(nextProps.whatever != this.props.whatever) {
      //doo something here
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    //return true if we want it to update or vice versa 
  }

  componentWillUnmount(){
    //remove event listener 
    //teardown or cleanup your code before your component disapears
  }

  render(){
    return(
      <div>
        code goes here
      </div>
    ) 
  }

}export default App

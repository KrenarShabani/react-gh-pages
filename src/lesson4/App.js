import React, {Component} from "react"

class App extends Component {
  constructor(){
    super() 
    this.state = {
      firstName: "",  
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "blue"
    }
  }
  
  handleChange = (event) => {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({
      [name]: value
    })

  }
  
  handleSubmit = () => {}

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.firstName}
          placeholder="first name" 
          onChange={this.handleChange} 
          name="firstName"
        />

        <br />
      
        <input
          type="text" 
          value={this.state.lastName}
          placeholder="last name" 
          onChange={this.handleChange} 
          name="lastName"
        />
      
        <textarea value={"something"} 
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input 
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> is freindly?
          <br />
          <input 
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender ==="male"}
            onChange={this.handleChange}
          /> male
          <br />
          <input 
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender ==="female"}
            onChange={this.handleChange}
          /> female
        </label>

        <br />
        <label>favorite color </label>

        <select 
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="blue">blue</option>
          <option value="red">red</option>
          <option value="green">green</option>
        </select>


        <h1> {this.state.firstName} {this.state.lastName} </h1>
        <h2> you are {this.state.gender} </h2>
        <h2> your favorite color is {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    )
  }
}
export default App

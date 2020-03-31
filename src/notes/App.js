import React, {Component} from "react"
import "./App.css"
class App extends Component{
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:"",
      age:"",
      gender:"",
      location:"",
      isHalal:false,
      isKosher:false,
      isVegan:false
    }
  }

  handleChange = (event) => {
    const {name, value, type, checked} = event.target 
    type === "checkbox" ? 
      this.setState({
        [name]: checked
      }) : 
      this.setState({
        [name]:value
    })
  }

  submitBtn = (event) => {
    event.preventDefault()


    window.alert(
      "First Name: " + [this.state.firstName] +"\n"+
      "Last Name: " + [this.state.lastName] +"\n"+
      "Age: " + [this.state.age] +"\n"+
      "Gender: " + [this.state.gender] +"\n"+
      "Location: " + [this.state.location] +"\n"+
      "Dietary restrictions: " + (this.state.isKosher ? "Kosher, " : "")
      + (this.state.isHalal ? "Halal, " : "") + (this.state.isVegan ? "Vegan" : "")
    ) 
  

  }
  

  render(){
    return(
      <main>
        <form>
          <input 
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name" 
            name="firstName"
          /><br />
         <input 
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name" 
           name="lastName"
          /><br />
          <input 
            type="text"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age" 
            name="age"
          /><br />
          
          {/*create radio buttons*/}
          <br />
          <label>Gender</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          /> female
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          /> male
          <br />
          <br />
          {/*create select box for location here*/}
          <label>Location</label>
          <br />
          <select
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          >
            <option value="">-- Destination --</option>
            <option value="Dubai">Dubai</option>
            <option value="Mexico">Mexico</option>
            <option value="France">France</option>
          </select>
          <br />
          <br />
          <label>Dietary Restrictions</label>
          <br />
          <input
            type="checkbox"
            name="isHalal" 
            checked={this.state.isHalal}
            onChange={this.handleChange}
          />Halal
          <input
            type="checkbox"
            name="isKosher" 
            checked={this.state.isKosher}
            onChange={this.handleChange}
          />Kosher
          <input
            type="checkbox"
            name="isVegan" 
            checked={this.state.isVegan}
            onChange={this.handleChange}
          />Vegan
          <br />
          <button
            onClick={this.submitBtn}
          >Submit</button>

        </form>
      </main>
    )
  }
}
export default App
















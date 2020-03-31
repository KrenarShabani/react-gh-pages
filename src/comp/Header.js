import React from "react"
import MyButton from "./MyButton"
function Header(props){
  return(
    <header className = 'navbar'>
      <MyButton 
        value='Home' 
		    handle={props.handle}
      />
      <MyButton
        value='About'
        handle={props.handle}
      />
      <MyButton
        value='Projects'
        handle={props.handle}
      />
      <div>
        <h3
          className='name' 
        >Krenar Shabani</h3>
      </div>
    </header>
  )
}
export default Header

import React,{Component} from 'react'
import "../App.scss"

function BodyStuff(props) {
	const h = window.screen.height/2;
	const w = window.screen.width/2;
	const style = 
	{
		'display': 'flex',
		'flex-direction': 'column',
		'background-color':'white',
  		'background-size': 'cover',
  		'height': h,
  		'width':w,
  		'margin': '0',
      'padding':'20px',
      'border-radius':'15px 50px',
  		'align-items': 'center'
	}
  return(
    <div className = 'todo-list'>
     <div style={style}>
      {props.content} 
     </div>
    </div>
  )
}
export default BodyStuff


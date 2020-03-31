import React from 'react'

function MyButton(props){
  return(
    <input
      className='button'
      type='button'
      value={props.value}
      onClick={(e) => props.handle(e,props.value)}
    />
  )


}
export default MyButton

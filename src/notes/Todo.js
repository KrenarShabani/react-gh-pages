import React from 'react'

const Todo = (props) => (
  <div className={props.item.completed ? "todo-item-done" : "todo-item"}>
    <input 
      type = 'checkbox' 
      checked = {props.item.completed}
      onChange = { () => props.handleChange(props.item.id) }
    />
    <p>{props.name}</p>
  </div>
)
export default Todo

import React from 'react'
import Todo from './Todo'
import './App.css'
import TodoData from './TodoData'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: TodoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render(){
  const display = this.state.todos.map(data => 
    <Todo 
      key = {data.id} 
      name = {data.name} 
      item = {data} 
      handleChange={this.handleChange}  
    />)

    return(
      <div className='todo-list'>
        {display}
      </div>
    )
  }

}
export default App

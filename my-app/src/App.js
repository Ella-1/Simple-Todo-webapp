import React, { Component } from "react";
import Todos from "./Todos/todos";
import AddTodo from "./Todos/addForms";

class App extends Component {
  state = {
    todos: [
      {id:1, content: 'buy some mile'},
      {id:2, content: 'buy a car'}
    ]
  }
  
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
    console.log(id)
  }

  addTodo = (todo) => {
      todo.id = Math.random();
      //creating new array of todo
      let todos = [...this.state.todos, todo];
      this.setState({
        todos
      })
  }
  
  render() {
    return(
      <div className="todo-app container"> 
        <h1 className="center blue-text" >Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo  addTodo={this.addTodo} />
      </div>
    )
  }
 
}

export default App;
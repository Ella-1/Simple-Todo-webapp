import React from "react";
// we now recieve todos as a prop here
const Todos = ({todos, deleteTodo}) => {
    // checking for the validity of every todo list 
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                // looping through every todo list
            <div className="collection-item" key={todo.id}>
                <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
            </div>
            )
        } )
    ) : (
        <p className="center">You have no todo's left</p>
    )

    return (
        <div className="todos collection" > 
            {todoList}
        </div>
    )
}

export default Todos
import React, { useState, useEffect, useReducer } from 'react'
import Todo from './Todo'



const TodoList = (props) => {

    return (
        <div>
            {props.todoList.map((todo, index) => (
                <Todo
                    key={index}
                    title={todo.title}
                    description={todo.description}
                    id={todo._id}
                    handleTodoListChange={props.handleTodoListChange}
                />
            ))}
        </div>
    )
}

export default TodoList
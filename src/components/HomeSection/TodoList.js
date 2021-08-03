import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, index) => (
                    <TodoItem 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle}
                        key={todo.id}
                        todo={todo} 
                        index={index} 
                    />
                ))
            }
        </ul>
    );
};

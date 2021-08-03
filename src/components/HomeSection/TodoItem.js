import React from 'react'

export const TodoItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <div className="task">
            <div className="group-identificator" id={todo.color}/>
            <li
                className="list-group-item bg-light"
                onClick={() => handleToggle(todo.id)}
            >
                <p
                    className={`${todo.done && 'taskCompleted'}`}
                >
                    {index + 1}. {todo.description}</p>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo)}
                    disabled={!todo.done}
                >
                    x
                </button>
            </li>
        </div>
    );
};

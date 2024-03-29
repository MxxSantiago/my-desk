import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const HomeSection = () => {
    const { todos, dispatch } = useContext(UserContext);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (newTodo) =>
        dispatch({ type: "add", payload: newTodo });

    const handleDelete = (todo) =>
        todo.done && dispatch({ type: "delete", payload: todo.id });

    const handleToggle = (todoId) =>
        dispatch({ type: "toggle", payload: todoId });

    return (
        <div>
            <h1>Tasks</h1>
            <hr />
            <h2 className="fw-light mb-3 fs-6">
                Create a new task, choose a name and color.
            </h2>
            <TodoAdd handleAddTodo={handleAddTodo} />
            <hr />
            <p>Tasks to do: {todos.length}</p>
            <TodoList
                todos={todos}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
            />
        </div>
    );
};

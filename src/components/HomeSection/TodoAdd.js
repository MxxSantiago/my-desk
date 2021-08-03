import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
    const [formValues, handleInputChange, resetForm] = useForm({
        description: '',
    });

    const handleSubmit = event => {
        event.preventDefault();

        if (formValues.description.trim().length <= 0) {
            alert("Enter at least one character");
            return;
        };

        const newTodo = {
            id: Date.now(),
            description: formValues.description,
            done: false
        };

        resetForm();
        handleAddTodo(newTodo);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                autoComplete="off"
                className="form-control bg-light"
                name="description"
                onChange={handleInputChange}
                placeholder="New task name.."
                required={true}
                spellCheck={false}
                type="text"
                value={formValues.description}
            />
            <button
                className="btn btn-primary"
                type="submit"
                disabled={formValues.description.length <= 0 ? true : false}
            >
                Add task
            </button>
        </form>
    );
};

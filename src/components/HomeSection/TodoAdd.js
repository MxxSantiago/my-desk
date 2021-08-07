import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
    const [formValues, handleInputChange, resetForm, setFormValues] = useForm({
        description: '',
        color: 'color-blue'
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
            color: formValues.color,
            done: false
        };

        resetForm();
        handleAddTodo(newTodo);
    };

    const changeColor = ({ target }) => {
        setFormValues({
            ...formValues,
            color: target.id
        });
    };

    const colors = [
        "color-blue",
        "color-purple",
        "color-yellow",
        "color-red",
        "color-green",
        "color-sky",
        "color-orange"
    ];

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input
                    autoComplete="off"
                    className="form-control bg-light"
                    maxLength={35}
                    name="description"
                    onChange={handleInputChange}
                    placeholder="Task name"
                    required={true}
                    spellCheck={false}
                    type="text"
                    value={formValues.description}
                />
                <button
                    className="btn text-light"
                    disabled={formValues.description.length <= 0 ? true : false}
                    id={formValues.color}
                    type="submit"
                >
                    Add task
                </button>
            </form>
            <div className="colorSelector">
                {
                    colors.map(color => (
                        <p 
                            key={color}
                            onClick={changeColor}
                            className="color" 
                            id={color}
                        />
                    ))
                }
            </div>
        </div>
    );
};

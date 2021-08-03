import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
    const [formValues, handleInputChange, resetForm] = useForm({
        description: '',
        color: 'color-yellow'
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
        formValues.color = target.id;
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    autoComplete="off"
                    className="form-control bg-light"
                    name="description"
                    onChange={handleInputChange}
                    placeholder="Task name"
                    required={true}
                    spellCheck={false}
                    type="text"
                    value={formValues.description}
                    maxLength={35}
                />
                <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={formValues.description.length <= 0 ? true : false}
                >
                    Add task
                </button>
            </form>
            <div className="colorSelector">
                <p onClick={changeColor} className="color" id="color-yellow"></p>
                <p onClick={changeColor} className="color" id="color-blue"></p>
                <p onClick={changeColor} className="color" id="color-pink"></p>
                <p onClick={changeColor} className="color" id="color-red"></p>
                <p onClick={changeColor} className="color" id="color-green"></p>
                <p onClick={changeColor} className="color" id="color-sky"></p>
                <p onClick={changeColor} className="color" id="color-orange"></p>
            </div>
        </div>
    );
};

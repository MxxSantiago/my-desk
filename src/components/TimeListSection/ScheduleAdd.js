import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const ScheduleAdd = ({ setSchedules, swiperState }) => {
    const timeInputsInitialValue = { time: "" };

    const [formValues, handleInputChange, resetForm] = useForm({
        description: "",
    });
    const [startTimeInput, setStartTimeInput] = useState(
        timeInputsInitialValue
    );
    const [endTimeInput, setEndTimeInput] = useState(timeInputsInitialValue);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formValues.description.trim().length <= 0) {
            alert("Enter at least one character");
            return;
        }

        const newSchedule = {
            id: Date.now(),
            day: swiperState,
            description: formValues.description,
            startTime: startTimeInput.time,
            endTime: endTimeInput.time,
        };

        resetForm();
        resetTimeInputs();

        setSchedules((schedules) => [...schedules, newSchedule]);
    };

    const resetTimeInputs = () => {
        setStartTimeInput(timeInputsInitialValue);
        setEndTimeInput(timeInputsInitialValue);
    };

    const startTimeInputChange = ({ target }) =>
        setStartTimeInput({ time: target.value });
    const endTimeInputChange = ({ target }) =>
        setEndTimeInput({ time: target.value });

    return (
        <form className="schedule-form" onSubmit={handleSubmit}>
            <input
                autoComplete="off"
                className="form-control bg-light col-12"
                maxLength={50}
                name="description"
                onChange={handleInputChange}
                placeholder="Schedule name"
                required={true}
                spellCheck={false}
                type="text"
                value={formValues.description}
            />
            <input
                className="time-start form-control bg-light"
                onChange={startTimeInputChange}
                required={true}
                type="time"
                value={startTimeInput.time}
            />
            <input
                className="time-end form-control bg-light"
                onChange={endTimeInputChange}
                required={true}
                type="time"
                value={endTimeInput.time}
            />
            <button
                className="btn btn-primary"
                disabled={formValues.description.length <= 0 ? true : false}
                type="submit"
            >
                Add schedule
            </button>
        </form>
    );
};

import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';

export const ScheduleAdd = ({setSchedules}) => {
    const [formValues, handleInputChange, resetForm] = useForm({description: ''});
    const [startTimeInputValue, setStartTimeInputValue] = useState({time: "00:00"});
    const [endTimeInputValue, setEndTimeInputValue] = useState({time: "00:00"});
    

    console.log(startTimeInputValue.time)

    const handleSubmit = event => {
        event.preventDefault();

        if (formValues.description.trim().length <= 0) {
            alert("Enter at least one character");
            return;
        };

        const newSchedule = {
            id: Date.now(),
            description: formValues.description,
            startTime: startTimeInputValue.time,
            endTime: endTimeInputValue.time
        };

        resetForm();    

        setSchedules(schedules => [...schedules, newSchedule]);
    };

    const handleStartTimeInputChange = ({target}) => setStartTimeInputValue({time: target.value});
    const handleEndTimeInputChange = ({target}) => setEndTimeInputValue({time: target.value});

    return (
        <form className="schedule-form" onSubmit={handleSubmit}>
            <input
                autoComplete="off"
                className="form-control bg-light col-12"
                maxLength={30}
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
                onChange={handleStartTimeInputChange}
                required={true}
                type="time"
                value={startTimeInputValue.time}
            />
            <input
                className="time-end form-control bg-light"
                onChange={handleEndTimeInputChange}
                required={true}
                type="time"
                value={endTimeInputValue.time}
            />
            <button
                className="btn btn-primary"
                disabled={formValues.description.length <= 0 ? true : false}
                type="submit"
            >
                Add 
            </button>
        </form>
    )
};

import React from 'react'

export const ScheduleItem = ({ schedule, setSchedules, index }) => {
    const handleDeleteSchedule = schedule => {
        setSchedules(schedules => schedules.filter(_schedule => _schedule.id !== schedule.id)); 
    };

    return (
        <li
            className="schedule list-group-item bg-light"
            key={index}
        >
            <p>{schedule.description}</p>
            <p className="schedule-time">{schedule.startTime} - {schedule.endTime}</p>
            <button
                className="btn btn-danger"
                onClick={() => handleDeleteSchedule(schedule)}
            >
                x
            </button>
        </li>
    );
};

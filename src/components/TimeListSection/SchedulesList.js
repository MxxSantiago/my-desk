import React from "react";
import { ScheduleItem } from "./ScheduleItem";
import { arrayPropertiesFilter } from "../../helpers/arrayPropertiesFilter";

export const SchedulesList = ({ schedules, setSchedules, swiperState }) => {
    const filteredPerDaySchedules = schedules.filter(
        (_schedule) => _schedule.day === swiperState
    );

    const orderedSchedules = arrayPropertiesFilter(
        filteredPerDaySchedules,
        "startTime"
    );

    return (
        <div>
            <p>Schedules: {filteredPerDaySchedules.length}</p>
            <ul className="schedules-container list-group list-group-flush">
                {orderedSchedules.map((schedule, index) => (
                    <ScheduleItem
                        schedule={schedule}
                        setSchedules={setSchedules}
                        index={index}
                        key={schedule.id}
                    />
                ))}
            </ul>
        </div>
    );
};

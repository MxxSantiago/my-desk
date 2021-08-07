import React from 'react'
import { ScheduleItem } from './ScheduleItem';

export const SchedulesList = ({ schedules, setSchedules, swiperState }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                schedules.map((schedule, index) => (
                    <ScheduleItem
                        schedule={schedule} 
                        setSchedules={setSchedules} 
                        index = {index} 
                        key= {schedule.id}
                    />
                ))
            }
        </ul>
    );
};

import React, { useEffect, useState } from 'react'
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import { SwiperNav } from './SwiperNav';
import { ScheduleAdd } from './ScheduleAdd';
import { SchedulesList } from './SchedulesList';

export const TimeListSection = () => {
    const schedulesInitialState = () => JSON.parse(localStorage.getItem('schedules')) || [];

    const [schedules, setSchedules] = useState(schedulesInitialState);
    const [swiperState, setSwiperState] = useState("Monday");
    
    useEffect(() => {
        localStorage.setItem('schedules', JSON.stringify(schedules));
    }, [schedules]);

    return (
        <div className="timeList-section">
            <h1>Timelist</h1>
            <hr/>
            <SwiperNav setSwiperState={setSwiperState}/>
            <hr/>
            <h2 className="fs-5 mb-3">Add {swiperState} schedule</h2>
            <ScheduleAdd setSchedules={setSchedules} swiperState={swiperState}/>
            <hr/>
            <SchedulesList schedules={schedules} setSchedules={setSchedules} swiperState={swiperState}/>
        </div>
    );
};

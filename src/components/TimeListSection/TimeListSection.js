import React, { useState } from 'react'
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import { SwiperNav } from './SwiperNav';
import { ScheduleAdd } from './ScheduleAdd';
import { SchedulesList } from './SchedulesList';

export const TimeListSection = () => {
    // const schedulesInitialState = () => JSON.parse(localStorage.getItem('schedules')) || ["schedule"];
    const schedulesInitialState = () => [{
        id: Date.now(),
        description: "Initial Schedule",
        startTime: "00:00",
        endTime: "00:00"
    }];
    
    const [schedules, setSchedules] = useState(schedulesInitialState);
    const [swiperState, setSwiperState] = useState("Monday");

    return (
        <div>
            <h1>Timelist</h1>
            <hr/>
            <SwiperNav setSwiperState={setSwiperState}/>
            <hr/>
            <ScheduleAdd setSchedules={setSchedules}/>
            <hr/>
            <p>{swiperState} schedules: {schedules.length}</p>
            <SchedulesList schedules={schedules} setSchedules={setSchedules} swiperState={swiperState}/>
        </div>
    );
};

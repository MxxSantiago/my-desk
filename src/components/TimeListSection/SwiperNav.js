import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper/core';

SwiperCore.use([Pagination]);

export const SwiperNav = ({ setSwiperState }) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const updateTimeList = ({ activeIndex }) => setSwiperState(days[activeIndex]);

    return (
        <div>
            <Swiper
                className="mySwiper fw-bold"
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{ "clickable": true }}
                onActiveIndexChange={swipeData => updateTimeList(swipeData)}
            >
                {
                    days.map((day, index) => (
                        <SwiperSlide
                            key={index}
                        >
                            {({ isActive }) => (
                                <div className={isActive ? "swipeActive fs-5" : "swipeInactive"}>{day}</div>
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

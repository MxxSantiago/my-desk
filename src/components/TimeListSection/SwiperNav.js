import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

export const SwiperNav = ({ setSwiperState, days, todayIndex }) => {
    const updateTimeList = ({ activeIndex }) =>
        setSwiperState(days[activeIndex]);

    return (
        <div>
            <Swiper
                initialSlide={todayIndex === 0 ? 6 : todayIndex - 1}
                className="mySwiper fw-bold"
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{ clickable: true }}
                onActiveIndexChange={(swipeData) => updateTimeList(swipeData)}
            >
                {days.map((day, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <div
                                className={
                                    isActive
                                        ? "swipeActive fs-5"
                                        : "swipeInactive fs-6"
                                }
                            >
                                {day}
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

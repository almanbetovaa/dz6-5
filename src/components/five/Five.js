import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './five.css';


import { Pagination } from 'swiper/modules';

const Five = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="one"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="two"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="three"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="four"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="five"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="six"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="seven"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="eight"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="nine"></div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default Five;

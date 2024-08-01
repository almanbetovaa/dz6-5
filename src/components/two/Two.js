import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './two.css'

import { EffectCube, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='one_cube'>
                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className='two_cube'>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='three_cube'>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='four_cube'>
                </div>
            </SwiperSlide>
            </Swiper>
        </>
    );
}
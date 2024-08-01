import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './one.css';

import { EffectCards } from 'swiper/modules';

export const SwiperComponents =()=> {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='one_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='two_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='three_kr'>

                    </div>
                </SwiperSlide><SwiperSlide>
                <div className='four_kr'>

                </div>
            </SwiperSlide>
                <SwiperSlide>
                    <div className='five_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='six_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='seven_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='eight_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='nine_kr'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='ten_kr'>

                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}

export default SwiperComponents;
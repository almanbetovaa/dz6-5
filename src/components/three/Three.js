
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './three.css';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const Three=()=> {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='one_krd'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='two_krd'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='three_krd'>

                    </div>
                </SwiperSlide><SwiperSlide>
                <div className='four_krd'>

                </div>
            </SwiperSlide>
                <SwiperSlide>
                    <div className='five_krd'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='six_krd'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='seven_krd'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='eight_krd'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='nine_krd'>

                    </div>
                </SwiperSlide>



            </Swiper>
        </>
    );
}

export default Three;
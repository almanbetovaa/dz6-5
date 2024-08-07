import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-creative';
import './four.css'


import { EffectCreative } from 'swiper/modules';

const Four =() =>{
    return (
        <>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        origin: 'left center',
                        translate: ['-5%', 0, -200],
                        rotate: [0, 100, 0],
                    },
                    next: {
                        origin: 'right center',
                        translate: ['5%', 0, -200],
                        rotate: [0, -100, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper6"
            >
                <SwiperSlide>
                    <div className='one_card'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='two_card'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='three_card'>

                    </div>
                </SwiperSlide><SwiperSlide>
                <div className='four_card'>

                </div>
            </SwiperSlide>
                <SwiperSlide>
                    <div className='five_card'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='six_card'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='seven_card'>

                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
export default Four;
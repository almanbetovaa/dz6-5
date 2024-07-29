
import {Swiper, SwiperSlide} from "swiper/react";

import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import  './one.module.css'

export const SwiperComponents = ({swiperImages, handleChange}) => {
    return(
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper1"
        >
            {swiperImages.map((item, idx) =>
                <SwiperSlide key={idx}>
                    Slide {idx++}
                </SwiperSlide>
            )}
        </Swiper>
    )
}
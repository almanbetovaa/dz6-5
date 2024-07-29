import React from "react";
import { EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import  './two.module.css';


const Two = ( )=> {
    return (
        <div>
            <h1>two</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eius eligendi incidunt modi nisi, nobis quibusdam quidem sunt. Commodi incidunt iusto omnis.
                Dolorem ducimus ea id laudantium magni molestias nisi nostrum odio quo sunt. Blanditiis deserunt, dicta dolorem doloremque fuga id iusto magnam nisi optio provident
                similique tempora ullam unde.
                Accusantium aut esse excepturi facilis ipsam maxime nemo placeat repudiandae voluptates.
                Ad autem dignissimos, dolorum id non sapiente! Exercitationem expedita inventore iure iusto minus nam natus quae quos saepe suscipit.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquam amet culpa eaque error illum ipsa iste iusto numquam provident quaerat qui quibusdam sunt tempora voluptate.
                Accusantium architecto at commodi consequatur culpa cum cupiditate deserunt dolore doloremque ea est excepturi explicabo fugiat id, in iure minus necessitatibus qui ratione reiciendis rem
                rerum soluta tempora tempore temporibus tenetur ut veniam.
                Consectetur, dolorum eveniet exercitationem explicabo facilis fuga inventore labore maiores, modi perspiciatis quam quasi repellendus saepe suscipit totam unde, veritatis voluptatum?
            </p>


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
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}




export default Two;
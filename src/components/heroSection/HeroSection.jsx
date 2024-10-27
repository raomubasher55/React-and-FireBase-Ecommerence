import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Scrollbar } from 'swiper/modules';
import img1 from '../../assets/bag_1.png'
import img2 from '../../assets/bag_2.png'
import img3 from '../../assets/bag_3.png'
import img4 from '../../assets/bag_4.png'
import img5 from '../../assets/2024_06_22_kids_mb.png'
import { MdStars } from "react-icons/md";
const HeroSection = () => {
    return (
        <div className='pt-12'>
            <Swiper
                scrollbar={{
                    hide: true
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, Scrollbar]}
                className='mySwiper bg-green-50'
            >
                <SwiperSlide>
                    <div className=" w-full bg-image1 ">
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className=" w-full bg-image2 ">
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className=" w-full bg-image3 ">
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className=" w-full bg-image4 ">
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" w-full bg-image5 ">
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default HeroSection

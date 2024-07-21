import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Scrollbar } from 'swiper/modules';
import img1 from '../../assets/bag_1.png'
import img2 from '../../assets/bag_2.png'
import img3  from '../../assets/bag_3.png'
import img4 from '../../assets/bag_4.png'
import { MdStars } from "react-icons/md";
const HeroSection = () => {
  return (
    <div className='pt-32'>
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
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-44  p-12 bg-green-50 ">
                        <img  src={img1} alt="Micropack MHP Headphone Black" className="w-1/2 mix-blend-multiply md:w-[25%] rounded-lg h-1/2 object-cover" />
                        <div className="flex flex-col gap-4">
                            <span className="text-primary text-sm text-red-500 flex items-center gap-3 font-bold"><MdStars className='text-xl'/>  Top Products of The Month</span>
                            <h1 className="text-3xl font-bold">Micropack MHP Headphone Black</h1>
                            <p className="text-muted-foreground text-zinc-500">
                                Discover optimal well-being through balanced exercises. Achieve a healthy body with expert guidance, personalized routines, and transformative fitness solutions.
                            </p>
                            <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg w-max shopBtn bg-green-200 hover:bg-green-400 ">Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
               
               
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-44  p-12 bg-green-50 ">
                        <img src={img2} alt="Micropack MHP Headphone Black" className="w-1/2 mix-blend-multiply md:w-[25%] rounded-lg h-1/2" />
                        <div className="flex flex-col gap-4">
                            <span className="text-primary text-sm text-red-500 flex items-center gap-3 font-bold"><MdStars className='text-xl'/>  Top Products of The Month</span>
                            <h1 className="text-3xl font-bold">Micropack MHP Headphone Black</h1>
                            <p className="text-muted-foreground text-zinc-500">
                                Discover optimal well-being through balanced exercises. Achieve a healthy body with expert guidance, personalized routines, and transformative fitness solutions.
                            </p>
                            <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg w-max shopBtn bg-green-200 hover:bg-green-400 ">Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
               
               
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-44  p-12 bg-green-50 ">
                        <img src={img3} alt="Micropack MHP Headphone Black" className="w-1/2 mix-blend-multiply md:w-[25%] rounded-lg h-1/2" />
                        <div className="flex flex-col gap-4">
                            <span className="text-primary text-sm text-red-500 flex items-center gap-3 font-bold"><MdStars className='text-xl'/>  Top Products of The Month</span>
                            <h1 className="text-3xl font-bold">Micropack MHP Headphone Black</h1>
                            <p className="text-muted-foreground text-zinc-500">
                                Discover optimal well-being through balanced exercises. Achieve a healthy body with expert guidance, personalized routines, and transformative fitness solutions.
                            </p>
                            <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg w-max shopBtn bg-green-200 hover:bg-green-400 ">Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
               
               
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-44  p-12 bg-green-50 ">
                        <img src={img4} alt="Micropack MHP Headphone Black" className="w-1/2 mix-blend-multiply md:w-[25%] rounded-lg h-1/2" />
                        <div className="flex flex-col gap-4">
                            <span className="text-primary text-sm text-red-500 flex items-center gap-3 font-bold"><MdStars className='text-xl'/>  Top Products of The Month</span>
                            <h1 className="text-3xl font-bold">Micropack MHP Headphone Black</h1>
                            <p className="text-muted-foreground text-zinc-500">
                                Discover optimal well-being through balanced exercises. Achieve a healthy body with expert guidance, personalized routines, and transformative fitness solutions.
                            </p>
                            <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg w-max shopBtn bg-green-200 hover:bg-green-400 ">Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>    </div>
  )
}

export default HeroSection

"use client";
import React, { useState } from 'react';

import "swiper/css";
import 'swiper/css/autoplay';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import slider3 from '@/app/assets/images/hero_planners.jpg';
import slider1 from '@/app/assets/images/hero_architects.jpg';
import slider2 from '@/app/assets/images/hero_consultants.jpg';
import slider4 from '@/app/assets/images/hero_researchers.jpg';

function Slider() {

    const sliders = [
        { id: '1', url: slider1, dynamicText: "Architects" },
        { id: '2', url: slider1, dynamicText: "Designers" },
        { id: '3', url: slider2, dynamicText: "Consultants" },
        { id: '4', url: slider3, dynamicText: "Planners" },
        { id: '5', url: slider4, dynamicText: "Researchers" },
    ]


    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (swiper: any) => {
        setActiveSlide(swiper.realIndex);
    };

    return (
        <Swiper
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            effect="fade"
            slidesPerView={1}
            direction={"vertical"}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            className=" items-center lg:h-[719px] h-[600px]"
        >
            {sliders.map((slide, index) => {
                return (
                    <SwiperSlide>
                        <div key={slide.id} className='w-full -mt-10'
                            style={{
                                backgroundImage: `url(${slide.url.src})`,
                                width: '100%',
                                height: '100%',
                                backgroundSize: 'cover'
                            }}>
                            <div className="pt-32 px-3 lg:px-[10%]">
                                <h1 className="lg:text-[4em] text-[2em] text-white">Designing Spaces, Defining Lifestyles - Your Vision, Our Expertise, </h1>
                                <div className="flex gap-3">
                                    <h1 className="lg:text-[4em] text-[2em] text-white font-bold">The</h1>
                                    <motion.div
                                        className="lg:text-[4em] text-[2em] text-white font-bold"
                                        initial={activeSlide === index ? { y: '5vh' } : { y: 0 }} // Initially off-screen (bottom) for the current slide
                                        animate={activeSlide === index ? { y: 0 } : { y: '5vh' }} // Animate for the current slide
                                        transition={{ duration: 1, type: 'keyframes', stiffness: 120 }}
                                    >
                                        {slide.dynamicText}.
                                    </motion.div>

                                </div>
                                <button className="text-white text-[40px] mt-16">I’m interested in </button>

                                <div style={{ height: '10vh', display: 'flex', bottom: '40px', position: 'absolute' }}>
                                    <div style={{ height: '10vh', width: '0.5px', opacity: '0.6', backgroundColor: 'white', position: 'absolute' }} />
                                    <motion.div
                                        style={{
                                            width: '2px',
                                            background: 'white',
                                            position: 'relative',
                                            top: 0,
                                        }}
                                        initial={{ height: 0, top: '100%' }} // Initial height set to 0 and position top to 100% (bottom)
                                        animate={{ height: '100%', top: 0 }} // Animate height to 100% (top to bottom)
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            repeatType: 'reverse',
                                            ease: 'linear',
                                        }}
                                    />
                                    <p className="text-white ml-5 uppercase text-[16px] w-[100px]">Scroll to Explore </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Slider
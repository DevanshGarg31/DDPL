'use client'
import React, { useEffect, useState } from 'react';

const Aesthetics = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [top, setTop] = useState(0)
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        console.log(scrollPosition);
        if (scrollPosition > 2800) {
            setTop(scrollPosition - 2800)

        } else if (scrollPosition < 2800) {
            setTop(2800 - scrollPosition)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [window.scrollY])

    return (
        <div className="relative w-full h-[700px] overflow-hidden bg-[#141414] flex flex-col justify-center items-center">
            <video
                className=" w-[500px] h-[500px] object-cover z-0"
                autoPlay
                loop
                muted

            >
                <source src={'/aesthetics.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className=" absolute  z-10 flex flex-col justify-center items-center h-full text-white text-[160px] font-light transition-all duration-1000 ease-in-out">
                {/* Your text content here */}

                <p
                    style={{
                        marginLeft: scrollPosition > 2800 ? top : -600,
                        marginRight: scrollPosition < 2800 ? top : 600
                    }}
                    className={`-ml-[300px]`}>design</p>
                <p
                    style={{
                        marginRight: scrollPosition > 2800 ? top : -600,
                        marginLeft: scrollPosition < 2800 ? top : 600
                    }}
                    className="-mr-[300px]">excellent</p>
            </div>
        </div>
    );
};

export default Aesthetics;

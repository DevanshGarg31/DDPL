'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const WhoWeAre = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [top, setTop] = useState(true)
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        if (scrollPosition == 0) {
            setTop(true)
        } else if (scrollPosition > 500) {
            setTop(true)
        } else if (scrollPosition < 500) {
            setTop(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <div className={`flex flex-col justify-center items-center py-[80px] ${top ? 'bg-black' : "bg-white"} transition-all duration-500 -mt-10`}>
            <h2 className={`${top ? 'text-white' : "text-black"} font-extralight text-[38px] w-[60%] text-center`}>Shaping Tomorrow's Skylines: Where Precision Meets Visionary Expertise</h2>

            <Link href="#_" className={`px-5 py-2.5 relative rounded-3xl mt-10 border-[1px]  group overflow-hidden font-medium ${!top ? 'bg-white text-black border-black' : "bg-black text-white border-white"}  inline-block`}>
                <span className={`absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 ${top ? 'bg-white' : "bg-black"} group-hover:h-full opacity-90`}></span>
                <span className={`relative ${top ? 'group-hover:text-black' : "group-hover:text-white"}`}>Who We Are</span>
            </Link>

        </div>
    )
}

export default WhoWeAre
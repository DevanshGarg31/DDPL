import React from 'react'
import Link from 'next/link';

const WhoWeAre = () => {
    return (
        <div className={`flex flex-col justify-center items-center py-[80px]`}>
            <h2 className={`text-black font-extralight text-[38px] w-[60%] text-center`}>Shaping Tomorrow's Skylines: Where Precision Meets Visionary Expertise</h2>

            <Link href="#_" className="px-5 py-2.5 relative rounded-3xl mt-10 border-[1px] border-black group overflow-hidden font-medium bg-white text-black inline-block">
                <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">Who We Are</span>
            </Link>

        </div>
    )
}

export default WhoWeAre
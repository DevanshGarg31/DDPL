import React from 'react'
import Link from 'next/link'
import { cards } from '@/app/constants/data'
import { MdConstruction } from "react-icons/md";

const Services = () => {
    return (

        <div>

            <div className='grid grid-cols-2 gap-10 items-start justify-items-start relative py-10 mx-[10%]'>

                <div
                    className='flex flex-col items-start justify-start  w-full h-[300px] top-20 sticky'
                >

                    <p className='font-bold lg:text-[48px] text-[28px]'>Our Services!</p>
                    <p className='mt-7 lg:text-[20px] text-[16px] font-light '>Hi! The following are our **Services**. If you want to learn more about each service, click on the **About the Service Button** in each card. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.</p>


                </div>

                <div className='flex flex-col lg:items-end items-center gap-4  '>

                    {cards.map((item) => {
                        return (
                            <Link key={item.id} href={item.path}
                                className='rounded-[10px] bg-[#30302fd9] p-7'
                            >
                                <div className='flex gap-5 items-center mb-7'>
                                    <MdConstruction color='#e4e2dd' size={20} />
                                    <p className='font-bold text-[24px] text-white'>Construction</p>
                                </div>
                                <p className='text-my-white text-[16px]'>{item.desc}</p>
                                <div className='flex justify-end'>
                                    <button type='button'
                                        className='text-white text-[14px] border-[1px] border-white rounded-3xl px-5 py-2 flex items-center justify-center gap-3 hover:bg-my-white hover:text-my-black duration-500 transition-all mt-5'
                                    >{item.buttonTxt}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-4 font-bold">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                        </svg>

                                    </button>
                                </div>
                            </Link>
                        )
                    })}
                </div>

            </div>



        </div>
    )
}

export default Services
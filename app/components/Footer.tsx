import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowUpCircle } from "react-icons/bs";
import { footerNav1, footerNav2, socials } from '../constants/data';

const Footer = () => {

    return (
        <div className='bg-my-black lg:px-[10%] px-2 grid lg:grid-cols-2 gap-3 py-20'>
            <div >
                <div className='flex lg:flex-row flex-col gap-5 uppercase'>
                    {footerNav1.map((item) => {
                        return (
                            <Link
                                className='text-my-white text-[16px] hover:text-primary'
                                id={item.id} href={item.path}>{item.displayName}</Link>
                        )
                    })}
                </div>
                <div className='flex gap-5 mt-6'>
                    {socials.map((item) => {
                        return (
                            <Link className='flex rounded-full bg-gray-100 hover:bg-primary p-[2px] justify-center items-center w-7 h-7' id={item.id} href={item.path} target='_blank'>
                                <Image
                                    alt={item.label}
                                    src={item.svg}
                                    width={18}
                                    height={18}
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div>
                <Link href='#' className='flex gap-3 justify-end items-center hover:cursor-pointer'>
                    <p className='text-my-white uppercase hover:text-primary text-[14px]'>Top of page</p>
                    <BsArrowUpCircle className='text-white hover:text-primary' size={23} />
                </Link>
                <div className='flex gap-3 text-[#767676] text-[14px] items-center lg:justify-end mt-7'>
                    <p>© Devpratik Developers Private Limited, All Rights Reserved "</p>
                    {footerNav2.map((item) => {
                        return (
                            <Link
                                className='hover:text-primary'
                                id={item.id} href={item.path}>{item.displayName}</Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer
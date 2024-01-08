import { useEffect, useRef, useState } from 'react';
import { navigations, navigations2, socials } from '../constants/data';
import { Variants, motion } from 'framer-motion';
import Logo from '../assets/images/logo.png';
import { FaPlus } from "react-icons/fa6";
import { menuItemType } from '../Home/types';


const Header = () => {

    const subMenuRef = useRef<HTMLDivElement>(null);

    const [nav, setNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [visibleItems, setVisibleItems] = useState<number>(0);
    const [selectedMenu, setSelectedMenu] = useState<menuItemType | null>();


    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleItems((prevVisible) =>
                selectedMenu?.sub && prevVisible < selectedMenu?.sub.length ? prevVisible + 1 : prevVisible
            );
        }, 500);

        return () => clearInterval(interval);
    }, [selectedMenu?.sub && selectedMenu?.sub.length, selectedMenu?.id]);

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };


    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
                setSelectedMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    const handleNav = () => {
        setNav(!nav);
    };


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col sticky top-0 z-40 bg-primary">

            <header className={`flex items-center md:justify-start md:gap-6 justify-between ${isScrolled ? ' shadow-sm shadow-slate-400 ' : ''} lg:px-[10%] bg-my-white`}>
                <div onClick={handleNav} className='block md:hidden float-start'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </div>

                <img
                    alt="Devpratik Developers"
                    src={Logo}
                    width={isScrolled ? 50 : 70}
                />
                <ul className="hidden md:flex gap-10">
                    {navigations.map(nav => (
                        <a
                            onClick={() => { setSelectedMenu(nav); setVisibleItems(0) }}
                            key={nav.id}
                            className={` font-medium  ${isScrolled ? 'text-[12px]' : 'text-[14px]'}  py-6 text-my-black hover:text-primary transition-all duration-500 flex items-center gap-2 justify-center`}
                            href={nav.path}
                        >
                            {nav.label}
                            {selectedMenu?.id === nav.id && selectedMenu?.sub && <div className={`absolute ${isScrolled ? 'top-[58px]' : 'top-[63px]'}  z-50`}>
                                <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.1085 6.75L14 21.1803L2.89153 6.75L25.1085 6.75Z" fill="#f4f4f4" stroke="#E1E5ED" />
                                </svg>

                            </div>}
                        </a>
                    ))}
                </ul>

                {selectedMenu?.sub && !nav &&
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: selectedMenu?.sub ? 1 : 0, height: selectedMenu?.sub ? 300 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeIn' }}
                        ref={subMenuRef} className={`absolute ${isScrolled ? 'top-[65px]' : 'top-[70px]'} w-full left-0 bg-my-black items-center justify-center grid grid-cols-4 gap-10 px-[10%]`}
                    >
                        <div />
                        <div
                            className='flex flex-col gap-12'>
                            {selectedMenu.sub.map((item, index
                            ) => {
                                return (
                                    <motion.div
                                        key={item.id}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate={index < visibleItems ? 'visible' : 'hidden'}
                                    >
                                        <a className='text-my-white text-[14px] col-span-1 hover:underline hover:duration-500'
                                            href={item.link}>
                                            {item.displayName}</a>
                                    </motion.div>
                                )
                            })}
                        </div>
                        <div />
                        <div />
                    </motion.div>
                }


                <ul className="hidden md:flex gap-10">
                    {navigations2.map(nav => (
                        <a onClick={() => { }}
                            key={nav.id}
                            className={` font-medium  ${isScrolled ? 'text-[12px]' : 'text-[14px]'}  py-6 text-my-black hover:text-primary transition-all duration-500 flex items-center gap-2`}
                            href={nav.path}
                        >
                            {nav.label}
                        </a>
                    ))}
                </ul>

                {
                    isScrolled && <div className='hidden md:flex gap-5 absolute top-[66px] bg-black shadow-md shadow-black rounded-[2px] px-3 py-2 right-[10%]'>
                        {socials.map((item) => {
                            return (
                                <a className='flex rounded-full bg-gray-100 hover:bg-primary p-1 justify-center items-center' id={item.id} href={item.path} >
                                    <img
                                        alt={item.label}
                                        src={item.svg}
                                        width={18}
                                        height={18}
                                    />
                                </a>
                            )
                        })}
                    </div>
                }

                <ul className={nav ? 'fixed z-30 flex-col bg-my-white pt-3 left-0 top-0 w-[60%] h-full border-r border-r-gray-900  ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <div className='flex justify-between items-center pr-[5%]'>
                        <img
                            alt="logo"
                            src={Logo}
                            width={90}
                        />
                        <svg onClick={handleNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    {navigations.map(nav => (
                        <>
                            <div key={nav.id} className="p-4 flex justify-between items-center hover:cursor-pointer" onClick={() => { setSelectedMenu(nav); setVisibleItems(0) }}>
                                <a className={`font-medium text-[14px] py-3 text-my-black `} href={nav.path}>
                                    {nav.label}</a>
                                {nav.sub && <FaPlus />}
                            </div>
                            {selectedMenu?.sub && selectedMenu.id === nav.id &&
                                < motion.div
                                    initial={{ opacity: 0, }}
                                    animate={{ opacity: selectedMenu?.sub ? 1 : 0, }}
                                    transition={{ duration: 0.3, ease: 'easeIn' }}
                                    ref={subMenuRef} className={` w-full h-fit bg-my-black items-center justify-center py-4 px-[10%]`}
                                >
                                    <div />
                                    <div
                                        className='flex flex-col gap-8'>
                                        {selectedMenu.sub.map((item
                                        ) => {
                                            return (
                                                <div
                                                    key={item.id}

                                                >
                                                    <a className='text-my-white hover:underline hover:duration-500'
                                                        href={item.link}>
                                                        {item.displayName}</a>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div />
                                    <div />
                                </motion.div >
                            }
                        </>
                    ))}

                </ul>

                <div />
            </header >
        </div >
    )
}

export default Header;
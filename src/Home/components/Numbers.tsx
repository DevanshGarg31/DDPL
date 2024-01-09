import bg from '../../assets/images/fun-bg.jpg';
import { numbers } from '../../constants/data';
import { FaBuilding, FaListOl, FaUser } from "react-icons/fa";
import CountUp from 'react-countup';
import { useMediaQuery } from '../../utils/useMediaQuery';


const Numbers = () => {

    const isMobile = useMediaQuery();

    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            height: isMobile ? '500px' : '300px',
            width: '100%',
            backgroundSize: 'cover',
            position: 'relative'
        }}>
            <div className='w-full h-full bg-primary opacity-80' />
            <div className='absolute w-full h-full top-0 z-20 grid lg:grid-cols-4 justify-center items-center lg:px-[10%]'>
                {numbers.map((item, index) => {
                    return (
                        <div key={item.id} className='flex gap-5 items-center lg:justify-center'>
                            <div className='p-5 border-[2px] border-my-black rounded-full'>
                                {index === 0 ? <FaUser size={25} /> : index === 3 ? <FaListOl size={25} /> : <FaBuilding size={25} />}
                            </div>
                            <div>
                                <CountUp start={0} end={+item.number}
                                    className='font-bold text-[24px]' />
                                <p className='text-[14px]'>{item.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Numbers
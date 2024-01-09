
import { cards } from '../../constants/data'
import ReactMarkdown from 'react-markdown'
import service from '../../assets/markdowns/services.md';
import servicesConstruction from '../../assets/markdowns/services_construction.md';

const Services = () => {
    return (

        <div>

            <div className='grid lg:grid-cols-2 gap-10 items-start justify-items-start relative py-10 mx-[10%]'>

                <div
                    className='flex flex-col items-start justify-start  w-full h-[300px] top-20 lg:sticky'
                >

                    <p className='font-bold lg:text-[48px] text-[28px]'>Our Services!</p>
                    <ReactMarkdown children={service} className='mt-7 lg:text-[20px] text-[16px] font-light ' />

                </div>

                <div className='flex flex-col lg:items-end items-center gap-4  '>

                    {cards.map((item) => {
                        return (
                            <a key={item.id} href={item.path}
                                className='rounded-[10px] bg-[#30302fd9] p-7'
                            >
                                <div className='flex gap-5 items-center mb-7'>
                                    {/* <MdConstruction color='#e4e2dd' size={20} /> */}
                                    <p className='font-bold text-[24px] text-white'>Construction</p>
                                </div>
                                <ReactMarkdown children={servicesConstruction} className='text-my-white text-[16px]' />
                                <div className='flex justify-end'>
                                    <button type='button'
                                        className='text-white text-[14px] border-[1px] border-white rounded-3xl px-5 py-2 flex items-center justify-center gap-3 hover:bg-my-white hover:text-my-black duration-500 transition-all mt-5'
                                    >{item.buttonTxt}
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-4 font-bold">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                        </svg>

                                    </button>
                                </div>
                            </a>
                        )
                    })}
                </div>

            </div>



        </div>
    )
}

export default Services
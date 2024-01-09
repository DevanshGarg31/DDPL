import { stripImgs } from "../../constants/data";

const InfinitStrip = () => {
    return (
        <div className="px-[10%]">
            <p className="text-red-500 text-[24px] py-10 font-bold">Awards and Empanelments</p>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] pb-24 ">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_Image]:max-w-none animate-infinite-scroll">
                    {stripImgs.map((item) => {
                        return (
                            <div className="group flex relative">
                                <li className="w-[80px]" key={item.id}>
                                    <img src={item.src} alt={item.alt} className="w-full grayscale hover:grayscale-0 hover:cursor-pointer" />
                                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-2 opacity-0 m-4 mx-auto">{item.alt}</span>
                                </li>
                            </div>
                        )
                    })}


                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_Image]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {stripImgs.map((item) => {
                        return (
                            <div className="group flex relative">
                                <li className="w-[80px]" key={item.id}>
                                    <img src={item.src} alt={item.alt} className="w-full grayscale hover:grayscale-0 hover:cursor-pointer" />
                                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
-translate-x-1/2 translate-y-2 opacity-0 m-4 mx-auto">{item.alt}</span>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default InfinitStrip;

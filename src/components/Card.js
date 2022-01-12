import React, { useState } from 'react';
import { dataList } from '../api/data';
import { AiFillPushpin } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

export default function Card() {
    const [index, setIndex] = useState(0);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handlePreviousClick() {
        setIndex(index - 1);
    }

    let data = dataList[index];
    return (
        <div className='min-h-screen bg-secondary-color flex justify-center items-start py-20 overflow-hidden'>
            <div className='container mx-2 p-4 rounded-xl flex flex-row justify-around'>
                {/* Cards */}
                <div className='flex flex-col items-center justify-between gap-x-4'>
                    <div key={data.id} className={`${data.color} rounded-lg shadow-md shadow-silver-color h-[400px] w-80`}>
                        <div>
                            <div className='p-4'>
                                <div className='flex items-center justify-between gap-x-8 mb-2'>
                                    <div className='flex flex-col items-start justify-center'>
                                        <h1 className='text-lg font-gray-700 font-bold'>{data.author}</h1>
                                        <h3 className='text-lg text-white font-semibold mb-2'>{data.cat}</h3>
                                    </div>
                                    <div>
                                        <img src={data.image} className='w-24 h-24 items-center rounded-full border-4 border-silver-color md:w-32 md:h-32' alt='author'/>
                                    </div>
                                </div>
                                <div>
                                    <ul>
                                        {data.work.split(',').map(subItem => {
                                            return <li className="flex flex-row items-center justify-start gap-x-2"><AiFillPushpin /> {subItem}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 w-full flex items-center justify-around'>
                        
                        { (index) > 0 ? <button onClick={handlePreviousClick} className={`${data.color} text-white font-bold py-2 px-4 rounded`}><BsFillArrowLeftCircleFill size={20}/></button> : " " }

                        { (index + 1) < dataList.length ? <button onClick={handleNextClick} className={`${data.color} text-white font-bold py-2 px-4 rounded`}><BsFillArrowRightCircleFill size={20}/></button> : " " }
                        
                    </div>
                </div>  
            </div>
        </div>
    )
}

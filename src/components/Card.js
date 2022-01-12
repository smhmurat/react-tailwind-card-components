import React, { useState } from 'react';
import { sculptureList } from '../api/data';
import { AiFillPushpin } from 'react-icons/ai';

export default function Card() {
    const [index, setIndex] = useState(0);

    function handleNextClick() {
        index >= 0 ? setIndex(index + 1) : setIndex(0);
    }

    function handlePreviousClick() {
        index >= 0 ? setIndex(index - 1) : setIndex(0);
    }

    let sculpture = sculptureList[index];
    return (
        <div className='min-h-screen bg-secondary-color flex justify-center items-start py-20 overflow-hidden'>
            <div className='container mx-2 p-4 rounded-xl'>
                {/* Cards */}
                <div className='h-full grid place-items-center'>
                    <div key={sculpture.id} className={`${sculpture.color} rounded-lg shadow-md shadow-silver-color`}>
                        <div>
                            <div className='p-4'>
                                <div className='flex items-center justify-between gap-x-8 mb-2'>
                                    <div className='flex flex-col items-start justify-center'>
                                        <h1 className='text-lg font-gray-700 font-bold'>{sculpture.author}</h1>
                                        <h3 className='text-lg text-white font-semibold mb-2'>{sculpture.cat}</h3>
                                    </div>
                                    <div>
                                        <img src={sculpture.image} className='w-24 h-24 items-center rounded-full border-4 border-silver-color md:w-32 md:h-32' alt='author'/>
                                    </div>
                                </div>
                                <div>
                                    <ul>
                                        {sculpture.work.split(',').map(subItem => {
                                            return <li className="flex flex-row items-center justify-start gap-x-2"><AiFillPushpin /> {subItem}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 space-x-4'>
                        <button onClick={handlePreviousClick} className={`${sculpture.color} text-white font-bold py-2 px-4 rounded`}>Previous</button>
                        <button onClick={handleNextClick} className={`${sculpture.color} text-white font-bold py-2 px-4 rounded`}>Next</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

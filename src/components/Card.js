import React, { useEffect, useState } from 'react';
import Data from '../api/data.json';
import Category from './Category';


export default function Card() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(Data)                    
    }, []);
    
    return (
        <div className='min-h-screen bg-silver-color flex justify-center items-start py-20 overflow-hidden'>
            <div className='container mx-2 p-4 bg-secondary-color rounded-xl'>
                {/* Cards */}
                <div className='sm:grid sm:grid-cols-1 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0'>
                    {/* Card-1 */}

                    {data && data.map((data, index) => <Category key={index} data={data} />)}
                </div>  
            </div>
        </div>
    )
}

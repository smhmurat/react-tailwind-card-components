import React from "react";

export default function Category({ data: {id, author, cat, image, work, color} }) {
    return (
    <div key={id} className={`bg-card-1 rounded-lg shadow-xl shadow-silver-color`}>
        <div>
            <div className='px-4 py-2'>
                <div className='flex items-center justify-between mb-2'>
                    <div className='flex flex-col items-start justify-center'>
                        <h1 className='text-lg font-gray-700 font-bold'>{author}</h1>
                        <h3 className='text-lg text-gray-600 font-semibold mb-2'>{cat}</h3>
                    </div>
                    <div>
                        <img src={image} className='w-24 h-24 items-center rounded-full border-4 border-silver-color md:w-32 md:h-32' alt='author'/>
                    </div>
                </div>
                <div>
                    <ul>
                        {work.split(',').map(subItem => {
                            return <li>{subItem}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

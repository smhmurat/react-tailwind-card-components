import React from 'react'


export default function Card() {
    return (
        <div className='min-h-screen bg-silver-color flex justify-center items-start py-20 overflow-hidden'>
            <div className='container mx-2 p-4 bg-secondary-color rounded-xl'>
                {/* Cards */}
                <div className='sm:grid sm:grid-cols-1 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0'>
                    {/* Card-1 */}
                    <div className='bg-sun-color rounded-lg'>
                        <div>
                            <div className='px-4 py-2'>
                                <div className='flex items-center justify-between mb-2'>
                                    <div className='flex flex-col items-start justify-center'>
                                        <h1 className='text-lg font-gray-700 font-bold'>Hacı Bektaş-i Veli</h1>
                                        <h3 className='text-lg text-gray-600 font-semibold mb-2'>İslami Dönem</h3>
                                    </div>
                                    <div>
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/%D0%91%D0%B0%D1%85%D0%B0_%D0%92%D0%B0%D0%BB%D0%B0%D0%B4_-_%D0%9C%D0%B0%D0%B0%D1%80%D0%B8%D1%84_%28%D0%9C%D0%B8%D0%BD%D0%B8%D0%B0%D1%82%D1%8E%D1%80%D0%B0%29.jpg/440px-%D0%91%D0%B0%D1%85%D0%B0_%D0%92%D0%B0%D0%BB%D0%B0%D0%B4_-_%D0%9C%D0%B0%D0%B0%D1%80%D0%B8%D1%84_%28%D0%9C%D0%B8%D0%BD%D0%B8%D0%B0%D1%82%D1%8E%D1%80%D0%B0%29.jpg' className='w-24 h-24 items-center rounded-full border-4 border-silver-color md:w-32 md:h-32' alt='author'/>
                                    </div>
                                </div>
                                <div>
                                    <ul>
                                        <li>Makalat</li>
                                        <li>Kitabül Fevalit</li>
                                        <li>Fatiha Tasviri</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

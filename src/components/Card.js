import React from 'react'


export default function Card() {
    return (
        <div className='min-h-screen bg-silver-color flex justify-center items-center py-20 overflow-hidden'>
            <div className='container mx-2 p-12 bg-secondary-color rounded-xl'>
                {/* <h1 className='text-4xl uppercase font-bold from-current mb-8 text-center'>Responsive Dynamic Cards</h1> */}

                {/* Cards */}
                <div className='sm:grid sm:grid-cols-1 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0'>
                    {/* Card-1 */}
                    <div className='bg-sun-color rounded-lg'>
                        <div>
                            <div className='px-4 py-2'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div className='flex flex-col items-start justify-center'>
                                        <h1 className='text-lg font-gray-700 font-bold'>Hacı Bektaş-i Veli</h1>
                                        <div className='flex space-x-2 mt-2'>
                                            {/* <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </span> */}
                                            <h3 className='text-lg text-gray-600 font-semibold mb-2'>İslami Dönem</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/%D0%91%D0%B0%D1%85%D0%B0_%D0%92%D0%B0%D0%BB%D0%B0%D0%B4_-_%D0%9C%D0%B0%D0%B0%D1%80%D0%B8%D1%84_%28%D0%9C%D0%B8%D0%BD%D0%B8%D0%B0%D1%82%D1%8E%D1%80%D0%B0%29.jpg/440px-%D0%91%D0%B0%D1%85%D0%B0_%D0%92%D0%B0%D0%BB%D0%B0%D0%B4_-_%D0%9C%D0%B0%D0%B0%D1%80%D0%B8%D1%84_%28%D0%9C%D0%B8%D0%BD%D0%B8%D0%B0%D1%82%D1%8E%D1%80%D0%B0%29.jpg' className='w-24 h-24 items-center rounded-full border-4 border-silver-color md:w-32 md:h-32' alt='photo'/>
                                    </div>
                                </div>
                                <div>
                                    <ul>
                                        <li>Makalat</li>
                                        <li>Kitabül Fevalit</li>
                                        <li>Fatiha Tasviri</li>
                                    </ul>
                                </div>
                                <button className='mt-12 w-full text-center bg-primary-color py-2 rounded-lg'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>  

                

            </div>
            
        </div>
    )
}

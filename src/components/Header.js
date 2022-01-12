import React from 'react'

export default function Header() {
    return (
        <div className='bg-primary-color'>
            <div className='container mx-auto p-4 flex items-center justify-between'>
              <a href='/#' className='text-2xl font-semibold text-secondary-color'>Türk Edebiyatı</a>
              <nav className='space-x-8 text-white font-medium'>
                  <a href='/#' className=''>Menu 1</a>
                  <a href='/#' className=''>Menu 2</a>
              </nav>
            </div>
        </div>
    )
}

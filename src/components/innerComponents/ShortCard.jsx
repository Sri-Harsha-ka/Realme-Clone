import React from 'react'

function ShortCard({ image, head, text, prize,offer }) {
    return (
        <div className='relative  cursor-pointer py-3'>
            <div className=' w-[40vw]  overflow-hidden rounded-xl'>
                <img src={image} className='transform transition-all scale-100 hover:scale-105 duration-500' alt="" />
           
            <div className='absolute top-16 right-0 left-10 pointer-events-none '>
                <p className='bg-orange-500 rounded-full w-28 text-sm py-1 tracking-tighter px-2 text-white'>UpTo ₹{offer}off</p>
                <p className='text-2xl font-semibold pt-1 tracking-tight'>{head}</p>
                <p className='opacity-50 text-lg font-semibold '>{text}</p>
                <p className='pt-32 text-xl font-semibold text-orange-600'><span className='text-gray-300 opacity-50 text-sm font-semibold'>From</span>₹{prize}</p>
            </div>
            </div>
        </div>
    )
}

export default ShortCard

import React from 'react'

function LongCard({image}) {
    return (
        <div className=' px-20  pb-14 w-[87%] rounded-2xl overflow-hidden ' >
            <div className=' bg-black rounded-lg overflow-hidden cursor-pointer'>
            <div className='hover:scale-105 scale-100 transition-all duration-700'>
                <img src={image} className='backdrop:blur-sm'  alt="" />
                </div>
            </div>
        </div>
    )
}

export default LongCard

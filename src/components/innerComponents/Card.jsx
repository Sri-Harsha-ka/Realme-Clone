import React from 'react'

function Card({ head, image1, image2, image3, name1,name2,name3, text, prize1,prize2,prize3 }) {
  return (
    <div>
      <div className='flex justify-between items-center pb-8'>
        <span className='text-xl font-semibold '>{head}</span>
        <span className='text-sm cursor-pointer text-gray-400 font-medium'>View More</span>
      </div>
      <div className='flex justify-center items-center gap-10'>
        <div>
          <div className='hover:scale-100 scale-95 pb-3 transition-all duration-500 cursor-pointer'>
            <img src={image1} alt="" className='w-38 h-32'  />
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-md font-semibold'>{name1}</p>
            <p className='font-ligth text-sm pt-2 '>{text}</p>
            <p className='pt-1 font-medium tracking-tighter text-orange-500'>₹{prize1}</p>
          </div>
        </div>
        <div>
          <div className='hover:scale-100 scale-95 pb-3 transition-all duration-500 cursor-pointer'>
            <img src={image2} alt="" className='w-38 h-32' />
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-md font-semibold'>{name2}</p>
            <p className='font-ligth text-sm pt-2'>{text}</p>
            <p className='pt-1 font-medium tracking-tighter text-orange-500'>{prize2}</p>
          </div>
        </div>
        <div>
          <div className='hover:scale-100 scale-95 transition-all duration-500 cursor-pointer'>
            <img src={image3} alt="" className='w-38 h-32 pb-3'  />
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-md font-semibold'>{name3}</p>
            <p className='font-ligth text-sm pt-2'>{text}</p>
            <p className='pt-1 font-medium tracking-tighter text-orange-500'>{prize3}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

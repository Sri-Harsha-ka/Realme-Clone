import React from 'react'

function Banner({image}) {
  return (
    <div className='w-[85%] overflow-hidden rounded-3xl'>
      <img src={image} alt="" className='transform scale-100 hover:scale-105 transition-all duration-500 cursor-pointer' />
    </div>
  )
}

export default Banner

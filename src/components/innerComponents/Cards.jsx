import React from 'react'

function Cards({image,text}) {
  return (
    <div>
      <img src={image} alt="" className='w-44 scale-95 hover:scale-100 transition-all duration-500 cursor-pointer' />
      <div className='flex items-center justify-center'>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default Cards

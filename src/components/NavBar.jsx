import React from 'react'
import { IoSearch } from "react-icons/io5";

function NavBar() {
  return (
    <nav className='flex justify-between items-center pt-5 pl-36 pr-36'>
      <div>
        <img src="https://i.pinimg.com/originals/ca/ec/2d/caec2ddfc4c22d0978bf4f6030294cb0.png" alt="" className='w-20' />
      </div>
      <div className='flex justify-center items-center list-none text-xl'> 
        <img src="https://image01.realme.net/general/20240606/1717665946780bfa2911c482b4d618b8c689b867c83f8.png" alt="" className='w-24 pt-1' />
        <li className='ml-3 mr-3'>realme Phone</li>
        <li className='ml-3 mr-3'>Narzo Phone</li>
        <li className='ml-3 mr-3'>Audio</li>
      </div>
      <div>
      <IoSearch size={30} />
      </div>
    </nav>
  )
}

export default NavBar

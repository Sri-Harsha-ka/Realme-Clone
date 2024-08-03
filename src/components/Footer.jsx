import React from 'react'
import LongCard from './innerComponents/LongCard'
import { TbHeadset } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useState } from 'react';

function Footer() {

    const [hovered, setHovered] = useState(false);

  const iconStyle = {
    color: hovered ? 'white' : 'black',
    fontSize: '50px',
    transition: 'color 0.3s',
  };

    return (
        <div>
            <div className='flex justify-center items-center pt-7 pb-7'>
                <span className='text-4xl font-bold tracking-wide'>Why Shope With Realme Store</span>
            </div>
            <div className='w-full flex justify-center items-center flex-col  pb-4'>
                <LongCard image="https://image01.realme.net/general/20231115/1700050384818e134ed7ae2f840e5a72c049cc3a8cd43.jpg.webp" />
            </div>
            <div className=' rounded-2xl overflow-hidden px-20 flex justify-center items-center flex-col  pb-4'>
                <div className='w-[87%] overflow-hidden rounded-lg'>
                    <img src="https://image01.realme.net/general/20231220/170307052695855f5e4ce654f465eac9963ba48cfbb02.png.webp" className='hover:scale-105 scale-100 transition-all duration-700' alt="" />
                </div>
            </div>
            <div className='flex justify-center items-center pt-7 pb-7'>
                <span className='text-4xl font-bold tracking-wide'>Make it Real</span>
            </div>
            <div className='flex justify-center items-center py-10 gap-10 '>
                <div className='w-[400px] rounded-lg overflow-hidden relative cursor-pointer '>
                    <img src="https://image01.realme.net/general/20230316/1678969834762.jpg.webp" className='hover:scale-105 scale-100 transition-all duration-700' alt="" />
                    <div className=' top-10 left-4 absolute flex flex-col justify-center items-center text-white'>
                        <p className='text-4xl font-bold'>About realme</p>
                        <span className='relative left-7 top-3 max-w-34'>
                            Realme vel, in debitis voluptates distinctio quas accusantium? Rem voluptatum deleniti soluta similique nobis? Iusto!
                        </span>
                    </div>
                    <div className='absolute bottom-10 left-10'>
                        <span className='text-lg font-mono text-white'>View More</span>
                    </div>
                </div>
                <div className='relative  cursor-pointer py-3'>
                    <div className=' w-[53vw] h-[22vw] overflow-hidden rounded-xl'>
                        <img src="https://image01.realme.net/general/20220920/1663638234748.jpg.webp" className='transform transition-all scale-100 hover:scale-105 duration-500' alt="" />

                        <div className='absolute top-16 right-0 left-10 pointer-events-none flex flex-col justify-center text-white '>
                            <p className='pt-1 tracking-tight text-4xl font-bold py-4'>Our Services</p>
                            <p className='text-lg font-semibold '>relame is a good service based compieny Lorem ipsum dolor,Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit.</p>
                            <span className='text-white text-lg font-mono relative top-40'>View More</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-start gap-32 pt-20 pb-32' >
                <div className='max-h-96'>
                    <p className='text-lg font-semibold'>Recommended</p>
                    <div className='flex flex-col pt-5 text-md tracking-tighter'>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>P Series</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>NARZO Series</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>GT Series</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>Number Series</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>C Series</span>
                    </div>
                </div>
                <div className='max-h-96'>
                    <p className='text-lg font-semibold'>Support</p>
                    <div className='flex flex-col pt-5 text-md tracking-tighter'>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>FAQ</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>realme VIP</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>User Guide</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>realme User+</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>realme Coins</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>Service</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>realme Exchange</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>realme Exchange T&C</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>E-wate Mangement</span>
                    </div>
                </div>
                <div className='max-h-96'>
                    <p className='text-lg font-semibold'>About realme</p>
                    <div className='flex flex-col pt-5 text-md tracking-tighter'>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>Our Brand</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>retail store</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>Declaration</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>realmeow</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>Newsroom</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>Portrait Master Academy</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>Integrity and Anti-corruption</span>
                    </div>
                </div>
                <div className='max-h-96'>
                    <p className='text-lg font-semibold'>Contact realme</p>
                    <div className='flex flex-col pt-5 text-md tracking-tighter'>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>HR: HR@realme.com</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>PR: indiapr@realme.com</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>Legal: legal.in@realme.com</span>
                        <span className='py-2 hover:text-yellow-400 cursor-pointer'>Marketing: marketing.in@realme.com</span>
                    </div>
                </div>
                <div>
                    <div className='w-56 rounded-full border-[2px] border-black flex justify-center items-center gap-4 py-1 px-5 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:border-gray-600'  onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                        <TbHeadset  style={iconStyle} />
                        <span className='font-bold text-lg'>Chat Support</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-sm py-2'>9:00-21:00, MON-SUN</p>
                        <p className='text-xs pb-1'>Including Holidays</p>
                        <p className='text-lg font-bold'>1800 102 2777</p>
                    </div>
                    <div className='flex gap-5 pt-10 py-6 justify-center items-center'>
                        <FaFacebook size={30} />
                        <FaTwitter size={30} />
                        <FaYoutube size={30} />
                        <AiFillInstagram size={30} />
                    </div>
                </div>
            </div>
            <div className='mx-48 pb-10'>
                    <div className='border-b-[1px] pb-3 border-black'>
                        <span>India English / INR </span>
                    </div>
                    <div className='flex justify-between items-center pt-3'>
                        <span className='font-light opacity-70'>© 2018-2024 realme. All Rights Reserved.</span>
                        <div className='font-light opacity-80'>
                            <span>User Agreement</span> <span className='px-2 text-lg'>|</span>
                            <span>User Agreement</span> <span className='px-2 text-lg'>|</span>
                            <span>User Agreement</span> <span className='px-2 text-lg'>|</span>
                            <span>User Agreement</span>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import ShortCard from './innerComponents/ShortCard'

function BestSellers() {
    return (

        <div className='w-full flex flex-col justify-center items-center '>

            <div className='py-8 w-[85%] '>
                <div className='flex justify-center items-center text-4xl font-bold pb-5'>
                    <span>Best Seller's</span>
                </div>
                <div className='flex justify-center items-center gap-10 '>
                    <div className='relative rounded-xl overflow-hidden w-[40vw] cursor-pointer'>
                        <img src="https://image01.realme.net/general/20240506/17149756229915aff1f1903bc4a408c24500cc5d0566f.jpg.webp" className='scale-100 hover:scale-105 transition-all duration-700' alt="" />
                        <div className='absolute z-50 top-3/4 right-0 left-10'>
                            <p className='bg-orange-500 rounded-full w-28 text-sm py-1 tracking-tighter px-2 text-white'>UpTo ₹1,000 off</p>
                            <p className='text-2xl font-semibold pt-1 tracking-tight'>realme NARZO 70 5G</p>
                            <p className='opacity-50 text-lg font-semibold '>The Fastest Phone Under 15K</p>
                            <p className='pt-10 text-xl font-semibold text-orange-600'><span className='text-black opacity-50 text-md font-semibold'>From</span> 15,999</p>
                        </div>
                    </div>

                    <div>
                        <ShortCard image="https://image01.realme.net/general/20240604/17174720612260a1494c86f5745158cb4b14e1d8eb99d.jpg.webp" head="realme 12x 5G" text="The Entry-level 5G Killer Under 12K" prize="11,999" offer="1,500" />
                        <ShortCard image="https://image01.realme.net/general/20240411/171280263714195d31e8e69b1422fa0fc207072163ebd.jpg.webp" head="realme 12 Pro 5G" text="Telephoto Potrait Camera" prize="24,999" offer="5,000" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellers

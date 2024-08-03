import React from 'react'
import LongCard from './innerComponents/LongCard'

function Events() {
  return (
    <div>
      <div  className='flex justify-center items-center pt-10 pb-20' >
        <p className='text-4xl font-bold tracking-tight'>
            New Launch
        </p>
      </div>

      <div className='w-full h-38 flex flex-col justify-center items-center'>
        <LongCard image="https://image01.realme.net/general/20240614/1718348916189593653df39af4d1686403f47b75b6345.jpg.webp" />
        <LongCard image="https://image01.realme.net/general/20240614/171834619143227d43c5bf9574df289492f00b95b9b78.jpg.webp" />
      </div>

      <div  className='flex justify-center items-center pt-10 pb-20' >
        <p className='text-4xl font-bold tracking-tight'>
        Highlighted Events
        </p>
      </div>

      <div className='w-full h-38  flex flex-col justify-center items-center'>
        <LongCard image="https://image01.realme.net/general/20240613/171824060903598f2ca7c31694d3a849219a5c19a9637.jpg.webp" />
        <LongCard image="https://image01.realme.net/general/20240614/17183561099894a3fe996db774d04ad1b5386320baf53.jpg.webp" />
        <LongCard image="https://image01.realme.net/general/20240607/1717754973361a72e206986794df38dc10dc2eb1d76f8.jpg.webp" />
      </div>
    </div>
  )
}

export default Events

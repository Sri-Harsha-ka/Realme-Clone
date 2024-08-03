import React from 'react'
import Cards from './innerComponents/Cards'

function ItemNav() {
  return (
    <div className='flex justify-center items-center pb-16 pt-10'>
        <Cards image="https://image01.realme.net/general/20240218/17082524330197c70b14866bd4f3f88b08b3ade36461b.jpg" text="Daily Lottery"/>      
        <Cards text="Flash Sale" image="https://image01.realme.net/general/20240218/1708252437012f55bf54872a84133bddd08a2559275fc.jpg" />
        <Cards text="Coupen Zone" image="https://image01.realme.net/general/20240218/170825244132032e6d2ca837b459ea6e1a52a0e4a81f4.jpg" />
        <Cards text="realme VIP" image="https://image01.realme.net/general/20240218/170825244457386bd249f25f0484a933629896f427874.jpg" />
        <Cards text="<10,000" image="https://image01.realme.net/general/20240506/1714990742666285894071e6c42a59065ac7bbbc37601.png" />
        <Cards text=">15,000" image="https://image01.realme.net/general/20240506/171499075579219fbc8d327264438be19386d63d52504.png" />
        <Cards text="Audio" image="https://image01.realme.net/general/20231226/17035776356775ba593a74b7f41a786772a3e1f145e0a.png" />
    </div>
  )
}

export default ItemNav

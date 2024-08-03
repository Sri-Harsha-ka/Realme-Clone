import React from 'react'
import Banner from './innerComponents/Banner'
import BannerComp from './innerComponents/BannerComp'
import LongCard from './innerComponents/LongCard'

function Recommanded() {
  return (
    <div>
      <div className='flex justify-center items-center pt-10 pb-5'>
        <span className='text-4xl font-bold tracking-wide'>Recommended Products</span>
      </div>
      
      <div className='w-full flex justify-center items-center flex-col pt-7 pb-16'>
        <Banner image="https://image01.realme.net/general/20240604/1717483033382c2cf9c19b7084acea0ce15a2ae05fc96.jpg.webp"  />
        <div className='flex justify-center items-center gap-10 py-8'>
        <BannerComp image="https://image01.realme.net/general/20240604/171748293867112e84402e2f94be2929d1b38f201d81f.jpg.webp" head="realme GT 6" text="Lanuching on 20th June" prize="49,999" />
        <BannerComp image="https://image01.realme.net/general/20240604/171748293867112e84402e2f94be2929d1b38f201d81f.jpg.webp" head="realme GT 6T" text="Lanuching on 21th June" prize="30,999" />
        </div>
      </div>
      <div className='w-full flex justify-center items-center flex-col  pb-16'>
        <Banner image="https://image01.realme.net/general/20240415/171316374524827fc10c95593486a9a34e6979cae4478.png.webp"  />
        <div className='flex justify-center items-center gap-10 py-8'>
        <BannerComp image="https://image01.realme.net/general/20240522/1716373030427f97f94e8d023401c9db142ed88aefbc2.jpg.webp" head="realme P1 5G" text="Bestplayer of AMOLED Display" prize="16,999" />
        <BannerComp image="https://image01.realme.net/general/20240415/17131641461236ed4bbcb855f4da1ba236debfc283605.png.webp" head="realme P1 Pro 5G" text="Bestplayer of Curved Display" prize="21,999" />
        </div>
      </div>
      <div className='w-full flex justify-center items-center flex-col  pb-16'>
        <Banner image="https://image01.realme.net/general/20240402/17120396044251831f6ac3c554c1ba044663552cb9964.png.webp"  />
        <div className='flex justify-center items-center gap-10 py-8'>
        <BannerComp image="https://image01.realme.net/general/20240402/17120397125303526fdf5a77a4220bb96024b3f9ce6ea.jpg.webp" head="realme 12x 5G" text="The Entry-level 5G Killer" prize="11,999" />
        <BannerComp image="https://image01.realme.net/general/20240415/17131641461236ed4bbcb855f4da1ba236debfc283605.png.webp" head="realme 12 Pro 5G" text="Telephoto Potrait Camera" prize="24,999" />
        </div>
        <div className='flex justify-center items-center gap-10 py-8'>
        <BannerComp image="https://image01.realme.net/general/20240129/17065171572278a5fd68dd2b74c80b9fdeb58af4c7161.jpg.webp" head="realme 12 Pro+5G" text="3X Periscope Portrait Camera" prize="29,999" />
        <BannerComp image="https://image01.realme.net/general/20240306/1709708015852336d8974a56640568f0af14c105a46ba.jpg.webp" head="realme 12+ 5G" text="Capture Clearer, Portrait" prize="20,999" />
        </div>
      </div>
      <div className='w-full flex justify-center items-center flex-col  pb-16'>
        <Banner image="https://image01.realme.net/general/20240605/1717568658506e488b4f332eb4defb92cb33afedb4b88.png.webp"  />
        <div className='flex justify-center items-center gap-10 py-8'>
        <BannerComp image="https://image01.realme.net/general/20240605/171756880185863d4a99d0436487996dd2ce45f12a9ea.jpg.webp" head="realme NARZO N63" text="Fastest 45watt Charging" prize="8,499" />
        <BannerComp image="https://image01.realme.net/general/20240527/171679812854106d15e286a2c4dbea6d7680f1550c997.jpg.webp" head="realme NARZO N65 5G" text="World's First MeadiaTeck" prize="11,499" />
        </div>
        <div className='flex justify-center items-center gap-10 py-8'>
        <BannerComp image="https://image01.realme.net/general/20240424/17139398006044bc0777ebd5645ec8ed402a7a940920d.jpg.webp" head="realme NARZO 70x 5G" text="The Better 45watt Charging Under 12K" prize="11,999" />
        <BannerComp image="https://image01.realme.net/general/20240319/1710831912274fd4d463d0076475ab0b0935090e3f742.jpg.webp" head="realme NARZO 70 Pro 5G" text="Capture Clearer, Portrait" prize="19,999" />
        </div>
      </div>
      <div className='w-full flex justify-center items-center flex-col  pb-16'>
        <Banner image="https://image01.realme.net/general/20240426/1714113504505a1d4f1d01a10427dbbfe2a966395164e.png.webp"  />
        <div className='flex justify-center items-center gap-10 py-8'>
        <BannerComp image="https://image01.realme.net/general/20231116/1700102851033c67d68b4d0b14e3d984e647fb870c161.jpg.webp" head="realme C51" text="33watt Charging Under 10K" prize="7,999" />
        <BannerComp image="https://image01.realme.net/general/20240613/1718249681796796cd4f3fb1b445598d7098add4d082f.jpg.webp" head="realme C65 5G" text="World's First MeadiaTeck" prize="10,499" />
        </div>
      </div>
      <div className='w-full flex justify-center items-center flex-col  pb-4'>
        <LongCard image="https://image01.realme.net/general/20240402/1712044255662f8cb83a186164e26a27ed864c83cabe4.jpg.webp" />
      </div>



    </div>
  )
}

export default Recommanded

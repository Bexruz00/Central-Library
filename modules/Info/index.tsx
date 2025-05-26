import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const Info = () => {
  const t = useTranslations("Info")
  return (
    <div className='flex items-center justify-around bg-black md:!pt-[150px] sm:!pt-[80px] !pt-[50px] !pb-[34px] lg:!px-0 md:!px-[10px] !px-[30px]'>
      <img className='lg:w-[550px] w-[450px] md:inline-block hidden' src="../books.png" alt="books" />
      <div className='flex flex-col justify-center lg:gap-[30px] sm:gap-[25px] gap-[18px]'>
        <h1 className='lg:text-[40px] sm:text-[38px] text-[32px] text-white font-bold max-w-[388px] !leading-[50px]'>{t.rich("info-title", { highlight: (chunks) => <span className="text-[#CC9600]">{chunks}</span>})}</h1>
        <p className='lg:text-[20px] sm:text-[18px] text-[17px] text-white font-normal max-w-[575px] !leading-8'>{t("info-subtitle")}</p>
        <div className='flex items-center justify-between max-w-[530px]'>
          <div className='flex flex-col'>
            <strong className='text-[#CA891D] font-normal text-[30px] font-re'>800+</strong>
            <strong className='text-[#CA891D] font-normal text-[12px] !mt-[10px] italic'>{t("info-text1")}</strong>
          </div>
          <div className='flex flex-col'>
            <strong className='text-[#CA891D] font-normal text-[30px] font-re'>1K+</strong>
            <strong className='text-[#CA891D] font-normal text-[12px] !mt-[10px] italic'>{t("info-text2")}</strong>
          </div>
          <div className='flex flex-col'>
            <strong className='text-[#CA891D] font-normal text-[30px] font-re'>50+</strong>
            <strong className='text-[#CA891D] font-normal text-[12px] !mt-[10px] italic'>{t("info-text3")}</strong>
          </div>
        </div>
        <Link href="/about"><button  className='md:w-[190px] w-[150px] h-[44px] md:text-[15px] text-[13px] bg-black border-[1px] text-white border-[#CC9600] rounded-lg'>Explore More</button></Link>
      </div>
    </div>
  )
}

export default Info
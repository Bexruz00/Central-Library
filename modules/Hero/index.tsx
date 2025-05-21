import { useTranslations } from 'next-intl'
import React from 'react'

const Hero = () => {
  const t = useTranslations("Hero")
  return (
    <div className='hero md:!py-[68px] sm:!py-[50px] !py-[30px]'>
      <div className='containers flex flex-col items-center'>
        <h1 className='hero__title'>{t("hero-title")}</h1>
        <p className='lg:text-[20px] md:text-[18px] text-[16px] font-normal text-white max-w-[888px] text-center md:!mt-[30px] !mt-[20px] md:!mb-[42px] !mb-[38px]'>{t("hero-subtitle")}</p>
        <div className='flex items-center gap-[10px] rounded-md !p-1 border border-[#CC9600]'>
          <input type="text" className='bg-transparent text-[#A59F9F] text-[15px] !pl-[36px] md:!max-w-[255px] sm:max-w-[240px] max-w-[200px] md:h-[50px] h-[30px] outline-0 rounded-md' placeholder={t("hero-input")}/>
          <button className='md:!px-[27px] !px-[25px] md:!py-[11px] !py-[9px] bg-[#4B330B] rounded-md text-white text-[18px]'>{t("hero-button")}</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
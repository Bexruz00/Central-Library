import { InstagramIcon, TelegramIcon } from '@/assets/icons'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black sm:!px-[58px] !px-[30px] !pt-[26px] !pb-[65px]'>
      <div className='w-full border-b-white border-[1px] !pb-[10px]'>
        <img src="../logo.png" alt="logo" className='sm:w-[104px] w-[70px]'/>
        <strong className='text-white text-[15px] font-normal italic'>Created by <a href='https://github.com/Bexruz00' className='underline' target="_blank">Bekhruz</a> and <a className='underline' href='https://t.me/Narzulloyev_03' target="_blank">Ilhom</a></strong>
      </div>
      <div className='flex lg:items-center items-start gap-[20px] justify-between !pt-[40px] lg:flex-row flex-col'>
        <strong className='text-[15px] text-white font-normal'>© 2025 | Central Library</strong>
        <p className='text-[#CC9600] text-[15px] italic'>Visit our branches in Tashkent, Navoi, and Zarafshan, and register for our online platform to enjoy maximum benefits!</p>
        <div className='flex items-center gap-[10px]'>
          <a href="https://www.instagram.com/b.beka_me/" target="_blank"><InstagramIcon/></a>
          <a href="https://t.me/Bexruz58" target="_blank"><TelegramIcon/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
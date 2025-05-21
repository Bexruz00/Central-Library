"use client"
import { BurgerIcon, CloseIcon } from '@/assets/icons'
import LangConfig from '@/components/LangConfig'
import { Link } from '@/i18n/navigation'
import getRequest from '@/service/getRequest'
import { HeaderActionsType } from '@/types/HeaderType'
import { useTranslations } from 'next-intl'
import React from 'react'
import clsx from 'clsx'

const Header = () => {
  const [open, setOpen] = React.useState(false)

  const user = getRequest("/users")
  const t = useTranslations("HeaderMenu")
  const actionsList: HeaderActionsType[] = [
    { id: 1, path: "/home", title: t("home") },
    { id: 2, path: "/about", title: t("about") },
    { id: 3, path: "/delivery-team", title: t("shop") },
    { id: 4, path: "/sellers", title: t("delivery-team") },
    { id: 5, path: "/shop", title: t("sellers") }
  ]

  return (
    <div className="header relative">
      <Link href="/home" className='flex items-center justify-center gap-[17px] max-w-[220px]'>
        <img className='lg:max-w-[90px] max-w-[70px]' src="/logo.png" alt="logo" />
        <span className={`font-bold lg:text-[28px] text-[24px] text-[#CC9600] uppercase`}>Central Library</span>
      </Link>
      <div className='flex items-center justify-between lg:gap-[45px] gap-[30px]'>
        <div className='md:flex items-center lg:gap-[47px] hidden gap-[30px]'>
          {actionsList.map((item: HeaderActionsType) => (
            <Link key={item.id} href={item.path} className="text-white lg:text-[20px] text-[18px] hover:text-[#d7bc70] duration-100">
              {item.title}
            </Link>
          ))}
        </div>
        <LangConfig />
        <span className='block md:hidden' onClick={() => setOpen(true)}><BurgerIcon /></span>
        <div className='lg:flex flex-col items-center lg:!ml-[26px] hidden'>
          <img src="/avatar.svg" alt="avatar" />
          <strong className='text-[15px] text-white tracking-[3px]'>
            {user.map((item: any) => item.username)}
          </strong>
        </div>
      </div>
      <div className={clsx("header__menu fixed flex items-center justify-center gap-5 text-center top-0 right-0 h-full w-[300px] bg-white z-50 shadow-lg p-5 transition-transform duration-300 ease-in-out", open ? "translate-x-0" : "translate-x-full")}>
        <span className='absolute top-8 sm:right-9 right-3 scale-150 cursor-pointer' onClick={() => setOpen(false)}>
          <CloseIcon />
        </span>
        <div className='flex flex-col gap-5 mt-16'>
          {actionsList.map((item: HeaderActionsType) => (
            <Link key={item.id} href={item.path} className="text-white text-[18px] hover:text-[#CC9600] duration-100">
              {item.title}
            </Link>
          ))}
          <div className='flex absolute bottom-5 items-center lg:!ml-[26px]'>
            <img src="/avatar.svg" alt="avatar" />
            <strong className='text-[15px] tracking-[3px] text-white'>
              {user.map((item: any) => item.username)}
            </strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

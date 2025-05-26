import { CardType } from '@/types/CardType'
import { Rate } from 'antd'
import { useTranslations } from 'next-intl'
import React from 'react'

const Cards = () => {
  const t = useTranslations("Card")
  const clients:CardType[] = [
    {
      id: 1,
      grade: 4,
      name: "Mahmud Aliyev",
      description: t("card-user1"),
      image: "/user1.jpg",
    },
    {
      id: 2,
      grade: 4,
      name: "Alina Shavkatovna",
      description: t("card-user2"),
      image: "/user2.jpg",
    },
    {
      id: 3,
      grade: 5,
      name: "Sultan Baxtiyorov",
      description: t("card-user3"),
      image: "/user3.jpg",
    },
    {
      id: 4,
      grade: 5,
      name: "Shabnam Asadov",
      description: t("card-user4"),
      image: "/user4.jpg",
    }
  ]

  return (
    <div className='containers !mb-[40px] flex flex-col items-center justify-between flex-wrap sm:!mt-[80px] !mt-[40px]'>
      <h2 className='md:text-[48px] sm:text-[40px] text-[32px] text-center font-bold md:!mb-[50px] sm:!mb-[30px] !mb-[30px]'>{t("card-title")}</h2>
      <div className='flex items-center justify-between flex-wrap gap-[20px] w-full'>
        {clients.map((item: CardType) => <div className="card rounded-2xl shadow-2xl" key={item.id} style={{ backgroundImage: `url(${item.image})` }}>
          <div className='card__box'>
            <h1 className='sm:text-[20px] text-[15px] text-white font-bold' style={{fontFamily: "'Arial', sans-serif"}}>{item.name}</h1>
            <p className='sm:text-[15px] text-[13px]  text-white font-normal !mt-[10px] line-clamp-3' style={{lineHeight: "20px"}}>{item.description}</p>
            <div className='flex items-center justify-center gap-[10px] rounded-2xl sm:w-[150px] w-[125px] sm:h-[30px] h-[25px] sm:!mt-[15px] !mt-[8px] bg-[#f1f1f137]'>
              <strong className='sm:text-[18px] text-[15px] text-gray-300'>{item.grade}</strong>
              <Rate disabled defaultValue={item.grade} className='sm:!text-[15px] !text-[12px] !text-gray-300'/>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Cards
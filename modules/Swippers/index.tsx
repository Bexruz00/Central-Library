"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css'
import { instance } from '@/hooks/instance'
import { useTranslations } from 'next-intl'

const Swippers = () => {
  const t = useTranslations("Swippers")

  const [books, setBooks] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    const AllBooks = async () => {
      try {
        const res = await instance().get('/books')
        setBooks(res.data)
      } catch (err) {
        console.error('API error:', err)
      }
    }

    AllBooks()
  }, [])

  const handleClick = (id: number) => {
    router.push(`/books/${id}`)
  }

  return (
    <div className='containers rounded-md md:!mt-[100px] sm:!mt-[50px] !mt-[10px]'>
      <h2 className='md:text-[48px] sm:text-[40px] text-[32px] text-center font-bold md:!mb-[50px] sm:!mb-[10px] !mb-[30px]'>{t("swippers-title")}</h2>
      <Swiper slidesPerView={4} spaceBetween={20} pagination={{ dynamicBullets: true, }} navigation={true} modules={[Pagination]} className="swipper1">
        {books.slice(0, 6).map((item: any, index: number) => (
          <SwiperSlide key={index} className='rounded-md lg:!h-[450px] !h-[380px] !p-3 cursor-pointer duration-300'>
            <div onClick={() => handleClick(item.id)} className='overflow-hidden flex gap-[16px] justify-center hover:scale-102 duration-200 flex-col max-w-[230px] rounded-md'>
              <img className='w-[220px] rounded-md ' src={item.book_image} alt="books" />
              <span>
                <p className='text-[20px] font-bold !pb-[8px]'>{item.book_name}</p>
                <strong className='font-normal text-[15px] '>{item.book_author}</strong>
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper slidesPerView={2} spaceBetween={20} pagination={{ dynamicBullets: true, }} navigation={true} modules={[Pagination]} className="swipper2">
        {books.slice(0, 6).map((item: any, index: number) => (
          <SwiperSlide key={index} className='!flex !items-center !justify-center rounded-md sm:!h-[450px] !pb-[50px] !h-[330px] sm:!p-3 !p-0 cursor-pointer duration-300'>
            <div onClick={() => handleClick(item.id)} className=' overflow-hidden flex gap-[16px] justify-center hover:scale-102 duration-200 flex-col max-w-[230px] rounded-md'>
              <img className='w-[220px] rounded-md ' src={item.book_image} alt="books" />
              <span>
                <p className='text-[20px] font-bold !pb-[8px]'>{item.book_name}</p>
                <strong className='font-normal text-[15px] '>{item.book_author}</strong>
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Swippers

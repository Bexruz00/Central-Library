"use client"
import React, { useEffect, useState } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css'
import { instance } from '@/hooks/instance'

const Swippers = () => {
  const [books, setBooks] = useState<any[]>([])

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

  return (
    <div className='containers'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {books.map((item: any, index: number) => (
          <SwiperSlide key={index} className='!h-[500px] bg-red-200'>
            <img src={item.book_image} alt="books" />
            {item.book_name}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Swippers

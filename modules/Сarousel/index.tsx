"use client"
import React, { useEffect, useState } from 'react'
import "./style.css"
import { instance } from '@/hooks/instance'
import { useRouter } from 'next/navigation'

const Carousels = () => {
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
    <div className='bg-black sm:!mt-[80px] !mt-[40px]'>
    <div className="!mx-auto galary containers">
        <div className="galary__TextBox">
          <strong className='text-outline'>Eng Sarasi</strong>
          <strong className='text-outline'>Eng Sarasi</strong>
          <strong className='text-outline'>Eng Sarasi</strong>
          <strong className='text-lined'>Eng Sarasi</strong>
          <strong className='text-outline'>Eng Sarasi</strong>
          <strong className='text-outline'>Eng Sarasi</strong>
        </div>
        <strong className='text-lined text-lined2'>Eng Sarasi</strong>
        <div className="galaryBox">
          <div className="footer__devs">
            <ul>{books.slice(5, 15).map((item: any, index: number) => <li onClick={() => handleClick(item.id)} key={index}><div className="item"><img className='rounded-md ' src={item.book_image} alt="books" /></div></li>)}</ul>
          </div>

          <div className="galary__animate">
            <ul>{books.slice(16, 26).map((item: any, index: number) => <li onClick={() => handleClick(item.id)} key={index}><div className="item"><img className='rounded-md ' src={item.book_image} alt="books" /></div></li>)}</ul>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Carousels
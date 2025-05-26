import Cards from '@/modules/Cards'
import Footer from '@/modules/Footer'
import Header from '@/modules/Header'
import Hero from '@/modules/Hero'
import Info from '@/modules/Info'
import Swippers from '@/modules/Swippers'
import Carousels from '@/modules/Сarousel'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Swippers/>
      <Carousels/>
      <Cards/>
      <Info/>
      <Footer/>
    </>
  )
}

export default HomePage
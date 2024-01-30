import React from 'react'


import TopSection from './topSection'
import ProductSection from './productSection'
import ChooseUsSection from './chooseusSection'
import HelpSection from './helpSection'
import PopularProduct from './popularProduct'
import TestimonialSlider from './testimonialSlider'
import BlogSection from './blogSection'
import TITLES from '@/utils/constants/title'
import HeadPage from '../layout/head'

const LandingPage = () => {
  return (
    <>
   
  
    <TopSection/>
    <ProductSection/>
    <ChooseUsSection/>
   <HelpSection/>
    <PopularProduct/>
    <TestimonialSlider/>
    <BlogSection/>

   

   
   
    </>
  )
}

export default LandingPage

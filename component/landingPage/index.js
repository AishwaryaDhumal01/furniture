import React from 'react'


 import TopSection from './topSection'
 import ProductSection from './productSection'
 import ChooseUsSection from './chooseusSection'
 import HelpSection from './helpSection'
 import PopularProduct from './popularProduct'
 import TestimonialSlider from './testimonialSlider'
 import BlogSection from './blogSection'
import TopSection_CONTENT from '@/utils/constants/topSectionContent'
// import TITLES from '@/utils/constants/title'
// import HeadPage from '../layout/head'

const LandingPage = () => {
  return (
    <>
   
  
   <TopSection page={TopSection_CONTENT.home.title}/>
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

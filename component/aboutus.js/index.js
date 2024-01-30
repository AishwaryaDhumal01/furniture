import React from 'react'
import TopSection from '../landingPage/topSection'
import ChooseUsSection from '../landingPage/chooseusSection'
import OurTeam from './ourteam'
import TestimonialSlider from '../landingPage/testimonialSlider'
import TopSection_CONTENT from '@/utils/constants/topSectionContent'

const AboutusPage = () => {
  return (
    <>
   <TopSection page={TopSection_CONTENT.shop}/>
   <ChooseUsSection/>
   <OurTeam/>
   <TestimonialSlider/>
   </>

  )
}

export default AboutusPage

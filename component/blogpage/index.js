import React from 'react'
import TopSection from '../landingPage/topSection'
import Blog from './blog'
import TestimonialSlider from '../landingPage/testimonialSlider'

const BlogPage = () => {
  return (
    <>
     <TopSection/>
     
    
     <div class="blog-section">
			<div class="container">
    <Blog/>
    <Blog/>
    <Blog/>
    </div>
    </div>
    
   
    
     <TestimonialSlider/>
    </>
  )
}

export default BlogPage

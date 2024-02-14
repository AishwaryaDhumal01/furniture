import React from 'react'
import TopSection from '../landingPage/topSection'
import Blog from './blog'
import TestimonialSlider from '../landingPage/testimonialSlider'
import TopSection_CONTENT from '@/utils/constants/topSectionContent'

const BlogPage = () => {
  return (
    <>
     <TopSection page={TopSection_CONTENT.blog.title}/>
     <div className="blog-section">
			<div className="container">
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

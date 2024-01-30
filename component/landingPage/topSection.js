import React from 'react'
import TopSection_CONTENT from '@/utils/constants/topSectionContent'
import Image from 'next/image'
import Home from '@/pages'



const TopSection = ({page}) => {
 if(Object.keys(TopSection_CONTENT)===page){
  console.log("lclvkclgkdl")
 }
  
  return (
    <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
           <h1>Modern Interior <span clsas="d-block"> Design Studio</span></h1> 
            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <p><a style={{color:"black", fontWeight:"500"}} href="#" className="btn btn-secondary me-2">Shop Now</a>
            <a href="#" style={{color:"white", fontWeight:"500"}} className="btn btn-white-outline">Explore</a></p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap" style={{backgroundImage:"url('assets/images/tosecimg/dots-light.svg')"}}>
            <Image alt='sofa' width={ 1200} height={10}  src="/assets/images/topsecimg/couch.png" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TopSection

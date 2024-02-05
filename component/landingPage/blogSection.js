import React from 'react'
import Blog from '../blogpage/blog'
import Link from 'next/link'

const blogSection = () => {
  return (
	

<div className="blog-section">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-6">
						<h2 className="section-title">Recent Blog</h2>
					</div>
					<div className="col-md-6 text-start text-md-end">
						<Link href="#" className="more">View All Posts</Link>
					</div>
				</div>
				 <Blog/> 
		 </div>
		 </div>
	  
	  
  )
}

export default blogSection

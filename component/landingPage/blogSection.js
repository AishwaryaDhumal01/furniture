import React from 'react'
import Blog from '../blogpage/blog'

const blogSection = () => {
  return (
	

<div class="blog-section">
			<div class="container">
				<div class="row mb-5">
					<div class="col-md-6">
						<h2 class="section-title">Recent Blog</h2>
					</div>
					<div class="col-md-6 text-start text-md-end">
						<a href="#" class="more">View All Posts</a>
					</div>
				</div>
				<Blog/>
		 </div>
		 </div>
	  
	  
  )
}

export default blogSection

import BlogPage from '@/component/blogpage'
import LayoutPage from '@/component/layout';
import React from 'react'

const Blog = () => {
  return (
    <BlogPage/>
  )
}
Blog.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Blog

import React from 'react'
import Footer from '../layout/footer'

const NoAuthLayout = ({children}) => {
  return (
    <>
    {children}
    <Footer/>
    </>

  )
}

export default NoAuthLayout

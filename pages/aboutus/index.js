import AboutusPage from '@/component/aboutus/index.js'
import LayoutPage from '@/component/layout';
import React from 'react'

const Aboutus = () => {
  return (
   <AboutusPage/>
  )
}
Aboutus.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Aboutus

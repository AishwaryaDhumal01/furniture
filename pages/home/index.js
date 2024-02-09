import LandingPage from '@/component/landingPage'
import React from 'react'
import LayoutPage from '@/component/layout'

const Home = () => {
  return (
    <LandingPage/>
  )
}

Home.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Home;

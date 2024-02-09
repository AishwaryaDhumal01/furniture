import LayoutPage from '@/component/layout';
import ShopPage from '@/component/shopPage'
import React from 'react'

const Shop = () => {
  return (
   <ShopPage/>
  )
}
Shop.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};


export default Shop

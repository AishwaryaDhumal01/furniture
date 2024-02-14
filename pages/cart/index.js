import CartPage from '@/component/cartPage'
import LayoutPage from '@/component/layout';
import React from 'react'

const Cart = () => {
  return (
    <CartPage/>
  )
}
Cart.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

export default Cart

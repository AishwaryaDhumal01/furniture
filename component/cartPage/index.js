import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems,selectCartTotalPrice,removeItemFromCart } from '@/utils/reducers/cart.slice';
import TopSection from '../landingPage/topSection';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotalPrice);

  const handleRemoveFromCart = (itemId) => {
    console.log('Removing item:', itemId); // Debugging statement
    dispatch(removeItemFromCart(itemId));
  };

  console.log('Cart Items:', cartItems); // Debugging statement

  return (
    <>
      <TopSection />

      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id}>
                        <td className="product-thumbnail">
                          <img src={item.image} alt={item.title} className="img-fluid" />
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">{item.title}</h2>
                        </td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price * item.quantity}</td>
                        <td><button onClick={() => handleRemoveFromCart(item.id)} className="btn btn-black btn-sm">Remove</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;

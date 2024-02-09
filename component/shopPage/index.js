import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectData, selectError, selectFilteredData, filterDataByCategory } from '@/utils/reducers/dataSlice';
import { addItemToCart } from '@/utils/reducers/cart.slice';
import TopSection from '../landingPage/topSection';
import { FaPlusCircle } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";


const ShopePage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const error = useSelector(selectError);
  const filteredData = useSelector(selectFilteredData); // Add filteredData selector
  
  const [category, setCategory] = useState(""); // State to hold selected category
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  function handleCategoryClick(category) {
    console.log("++++++clicked++++++");
    setCategory("");
    setCategory(category); // Update selected category state
    dispatch(filterDataByCategory({ category: 'category', value: category })); // Dispatch action to filter data
  }

  // Function to add item to cart
  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item)); // Dispatch addItemToCart action with the selected item
  };

  if (!data.length) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }
    
  // Render fetched data
  return (
    <>
      <TopSection />

      <div className="button-container">
        <button onClick={() => handleCategoryClick("women's clothing")} className="custom-button">Women's</button>
        <button onClick={() => handleCategoryClick("men's clothing")} className="custom-button">Men's</button>
        <button onClick={() => handleCategoryClick("jewelery")} className="custom-button">Jewelry</button>
        <button onClick={() => handleCategoryClick("electronics")} className="custom-button">Electronics</button>
      </div>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {(category ? filteredData : data).map(product => (
              <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
                <a className="product-item" href="#">
                  <img src={product.image} alt={product.title} className="img-fluid product-thumbnail" />
                  <h3 className="product-title">{product.title}</h3>
                  <strong className="product-price">Price: ${product.price}</strong>
                  {/* Add button to add item to cart */}
                  <span className="icon-cross">
                 <TiPlus onClick={() => handleAddToCart(product)} className='img-fluid' style={{color:"white"}} /> </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopePage;

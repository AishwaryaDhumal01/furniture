import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData,selectData,selectError,selectLoading,filterDataByCategory ,selectFilteredData} from '@/utils/reducers/dataSlice';
import TopSection from '../landingPage/topSection';
import { TiPlus } from "react-icons/ti";
import { addToCart } from '@/utils/reducers/cart.slice';
import TopSection_CONTENT from '@/utils/constants/topSectionContent';

const ShopePage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const filteredData = useSelector(selectFilteredData);
  const [category, setCategory] = useState('')

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);

  function handleCategoryClick(selectedCategory) {
    setCategory(selectedCategory); 
    dispatch(filterDataByCategory({ category: 'category', value: selectedCategory }));
  }
   
  function handleShowAll(){
    setCategory("")
  }
  
  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }


  if (loading) { 
    return <div>Loading...</div>;
  }


  
  if (error) {
    return <div>Error: {error}</div>;
  }

  const productsToRender = category ? filteredData : data;
    
  
  return (
    <>
    <TopSection page={TopSection_CONTENT.shop.title} />
      <div className="button-container">
      <button onClick={() => handleCategoryClick("women's clothing")} className="custom-button">Women's Clothing</button>
        <button onClick={() => handleCategoryClick("men's clothing")} className="custom-button">Men's Clothing</button>
        <button onClick={() => handleCategoryClick("jewelery")} className="custom-button">Jewelery</button>
        <button onClick={() => handleCategoryClick("electronics")} className="custom-button">Electronics</button>
        <button onClick={() => handleShowAll("All")} className="custom-button">All</button>

       </div>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {productsToRender.map(product => (
              <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
                <a className="product-item" href="#">
                   <img src={product.image} alt={product.title} className="img-fluid product-thumbnail" />
                  <h3 className="product-title">{product.title}</h3>
                  <strong className="product-price">Price: ${product.price}</strong>
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

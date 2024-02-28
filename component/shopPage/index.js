import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectData, selectError, selectLoading, filterDataByCategory, selectFilteredData } from '@/utils/reducers/dataSlice';
import TopSection from '../landingPage/topSection';
import { TiPlus } from "react-icons/ti";
import { addToCart } from '@/utils/reducers/cart.slice';
import TopSection_CONTENT from '@/utils/constants/topSectionContent';

const ITEMS_PER_PAGE = 12; // Number of products per page

const ShopPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const filteredData = useSelector(selectFilteredData);
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  function handleCategoryClick(selectedCategory) {
    setCategory(selectedCategory);
    setCurrentPage(1); // Reset current page when category changes
    dispatch(filterDataByCategory({ category: 'category', value: selectedCategory }));
  }

  function handleShowAll() {
    setCategory('');
    setCurrentPage(1); // Reset current page when showing all products
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

  // Pagination
  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = productsToRender.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <TopSection page={TopSection_CONTENT.shop.title} />
      <div className="button-container">
        <button onClick={() => handleCategoryClick("women's clothing")} className="custom-button">Women's Clothing</button>
        <button onClick={() => handleCategoryClick("men's clothing")} className="custom-button">Men's Clothing</button>
        <button onClick={() => handleCategoryClick("jewelry")} className="custom-button">Jewelry</button>
        <button onClick={() => handleCategoryClick("electronics")} className="custom-button">Electronics</button>
        <button onClick={() => handleShowAll("All")} className="custom-button">All</button>
      </div>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {currentProducts.map(product => (
              <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
                <a className="product-item" href="#">
                  <img src={product.image} alt={product.title} className="img-fluid product-thumbnail" />
                  <h3 className="product-title">{product.title}</h3>
                  <strong className="product-price">Price: ${product.price}</strong>
                  <span className="icon-cross">
                    <TiPlus onClick={() => handleAddToCart(product)} className='img-fluid' style={{ color: "white" }} />
                  </span>
                </a>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <nav>
            <ul className="pagination">
              {[...Array(Math.ceil(productsToRender.length / ITEMS_PER_PAGE)).keys()].map(number => (
                <li key={number} className="page-item">
                  <button onClick={() => paginate(number + 1)} className="page-link">
                    {number + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ShopPage;

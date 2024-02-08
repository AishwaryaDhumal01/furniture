import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData,selectData,selectError } from '@/utils/reducers/dataSlice';

const ShopePage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const error = useSelector(selectError);
  

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);

  
  
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
      <div className="button-container">
      <button onClick={() => handleCategoryClick("men's clothing")} className="custom-button">womens</button>
        <button className="custom-button">mens</button>
        <button className="custom-button">jewelery</button>
        <button className="custom-button">electronics</button>
       </div>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {data.map(product => (
              <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
                <a className="product-item" href="#">
                   <img src={product.image} alt={product.title} className="img-fluid product-thumbnail" />
                  <h3 className="product-title">{product.title}</h3>
                  <strong className="product-price">Price: ${product.price}</strong>
                  <span className="icon-cross">
                    <img src="assets/images/productsecimg/cross.svg" className="img-fluid" />
                  </span>
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

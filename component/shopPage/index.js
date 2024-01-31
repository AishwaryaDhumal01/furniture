import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopSection from '../landingPage/topSection';


const ShopePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products/?categoryId=3');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount

  useEffect(() => {
    console.log('Products:', products);
  }, [products]);

  return (
	<>
 <div>
      {/* {loading ? (
        <p>Loading...</p>
      ) : (
         */} 
     
    </div>

    <TopSection/>
   
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
          <div className="row">
         
          
		  {products.map(product => (
			
			 <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5  " >
            <a  className="product-item" href="#">
              <img src={product.images} alt={product.name}className="img-fluid product-thumbnail" />
              <h3 className="product-title">{product.name}</h3>
              
			  <strong className="product-price">Price: ${product.price}</strong>
              <span className="icon-cross">
			 <img src="assets/images/productsecimg/cross.svg" className="img-fluid"/>
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
{/* <img src="images/product-3.png" className="img-fluid product-thumbnail"/>
            <h3 className="product-title">Nordic Chair</h3>
            <strong className="product-price">$50.00</strong> 
        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img src="images/product-1.png" className="img-fluid product-thumbnail"/>
            <h3 className="product-title">Nordic Chair</h3>
            <strong className="product-price">$50.00</strong>

            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid"/>
            </span>
          </a>
        </div> 


        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img src="images/product-2.png" className="img-fluid product-thumbnail"/>
            <h3 className="product-title">Kruzo Aero Chair</h3>
            <strong className="product-price">$78.00</strong>

            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid"/>
            </span>
          </a>
        </div>

        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img src="images/product-3.png" className="img-fluid product-thumbnail"/>
            <h3 className="product-title">Ergonomic Chair</h3>
            <strong className="product-price">$43.00</strong>

            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid"/>
            </span>
          </a>
        </div>


        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img src="images/product-3.png" className="img-fluid product-thumbnail"/>
            <h3 className="product-title">Nordic Chair</h3>
            <strong className="product-price">$50.00</strong>

            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid"/>
            </span>
          </a>
        </div> 

        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img src="images/product-1.png" className="img-fluid product-thumbnail"/>
            <h3 className="product-title">Nordic Chair</h3>
            <strong className="product-price">$50.00</strong>

            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid"/>
            </span>
          </a>
        </div> 
        
      
        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img src="images/product-2.png" className="img-fluid product-thumbnail"/>
            <h3 className="product-title">Kruzo Aero Chair</h3>
            <strong className="product-price">$78.00</strong>

            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid"/>
            </span>
          </a>
        </div>
        
        <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#">
            <img src="images/product-3.png" className="img-fluid product-thumbnail"/>
            <h3 className="product-title">Ergonomic Chair</h3>
            <strong className="product-price">$43.00</strong>

            <span className="icon-cross">
              <img src="images/cross.svg" className="img-fluid"/>
            </span>
          </a>
        </div>*/}
      
        


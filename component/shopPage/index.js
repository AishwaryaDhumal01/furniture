import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopSection from '../landingPage/topSection';
import TopSection_CONTENT from '@/utils/constants/topSectionContent';
import { UseGlobalContext } from '@/context/userContext';
import { useContext } from 'react';
import { UserContext } from '@/context/userContext';


const ShopePage = () => {
  const {products}  = useContext(UserContext);

   const CatogryHandle = () =>{
      if("mensClthing"===products.catrgory){
        console.log(xkvdkvjkg,products.catrgory)
        
      }
   }
   
  return (
	<>
 <div>
      {/* {loading ? (
        <p>Loading...</p>
      ) : (
         */} 
     
    </div>

    <TopSection page={TopSection_CONTENT.shop.title}/>
    <button onClick={CatogryHandle}>catogery</button>
   
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
          <div className="row">
         
          
		  {products.map(product => (
			
			 <div  key={product.id} className="col-12 col-md-4 col-lg-3 mb-5  " >
            <a  className="product-item" href="#">
              <img  src={product.image} alt={product.title}className="img-fluid product-thumbnail" />
              <h3 className="product-title">{product.title}</h3>
              
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

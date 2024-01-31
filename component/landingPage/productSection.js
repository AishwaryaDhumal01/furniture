import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProductSection_data = [
  {
    image: "/assets/images/productsecimg/product-1.png",
    title: "Nordic Chair",
    price: "$50.00",
  },
  {
    image: "/assets/images/productsecimg/product-2.png",
    title: "Kruzo Aero Chair",
    price: "$78.00",
  },
  {
    image: "/assets/images/productsecimg/product-3.png",
    title: "Ergonomic Chair",
    price: "$43.00",
  },
];

const ProductSection = () => {
     
  return (
    //  Start Product Section -->

    <div className="product-section">
      <div className="container">
        <div className="row">
          {/* Start Column 1 --> */}

          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title" style={{fontWeight:"500"}}>
              Crafted with excellent material.
            </h2>
            <p className="mb-4" style={{fontWeight:"300"}}>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
            </p>
            <p>
              <Link style={{backgroundColor:"#2f2f2f", color:"white"}} href="shop.html" className="btn">
                Explore
              </Link>
            </p>
          </div>
    
          {/* End Column 1 -->*/}


          {/* Start Column 2 --> */}

          {ProductSection_data.map((data, index) => {
            return (
              <>
                {" "}
                <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                  {" "}
                  <Link className="product-item" href="cart.html">
                    <Image
                    height={100}
                    width={1000}
                      src={data.image}
                      className="img-fluid product-thumbnail"
                   alt="chair" />
                    <h3 className="product-title">{data.title}</h3>
                    <strong className="product-price">{data.price}</strong>

                    <span className="icon-cross">
                      <Image
                      width={20}
                      height={100}
                        src="assets/images/productsecimg/cross.svg"
                        className="img-fluid"
                        alt="chair" />
                    </span>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const POPULARPRODUCT_DATA = [
  {
    image: "/assets/images/popularprdimg/product-1.png",
    title: "Nordic Chair",
    desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    btnText: "Read more",
  },
  {
    image: "/assets/images/popularprdimg/product-2.png",
    title: "Kruzo Aero Chair",
    desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    btnText: "Read More",
  },
  {
    image: "/assets/images/popularprdimg/product-3.png",
    title: " Ergonomic Chair",
    desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    btnText: "Read More",
  },
];

const PopularProduct = () => {
  return (
    // <!-- Start Popular Product -->
    <div className="popular-product">
      <div className="container">
        <div className="row">
          {POPULARPRODUCT_DATA.map((data, index) => {
            return (
             
                <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div className="product-item-sm d-flex">
                    <div className="thumbnail">
                      <Image height={60} width={130} src={data.image} alt="Image" className="img-fluid" />
                    </div>
                    <div className="pt-3">
                      <h3>{data.title}</h3>
                      <p>{data.desc}</p>
                      <p>
                        <Link href="#">{data.btnText}</Link>
                      </p>
                    </div>
                  </div>
                </div>
             
            );
          })}
        </div>
      </div>
    </div>
    //{/* <!-- End Popular Product --> */}
  );
};

export default PopularProduct;

import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const BLOG_DATA = [
  {
    image: "/assets/images/blogimg/post-1.jpg",
    title: "First Time Home Owner Ideas",
    text: " by ",
    name: "Kristin Watson",
    text2: " on ",
    date: "Dec 19, 2021",
  },
  {
    image: "/assets/images/blogimg/post-2.jpg",
    title: "First Time Home Owner Ideas",
    text: " by ",
    name: "Robert Fox",
    text2: " on ",
    date: "Dec 19, 2021",
  },
  {
    image: "/assets/images/blogimg/post-3.jpg",
    title: "Small Space Furniture Apartment Ideas",
    text: " by ",
    name: "Kristin Watson",
    text2: " on ",
    date: "Dec 19, 2021",
  },
];

const Blog = () => {
  return (
    // <!-- Start Blog Section -->
    
     

       <>
        <div  className="row">
          {BLOG_DATA.map((data, index) => {
            return (
              
             
                <div  style={{lineHeight: "28px", padding:"20px"}} key={index} className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                  <div className="post-entry">
                    <Link href="#" className="post-thumbnail">
                      <Image height={500} width={500}
                        src={data.image}
                        alt="Image"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="post-content-entry">
                      <h3>
                        <Link style={{color:"#454545 "}} href="#">{data.title}</Link>
                      </h3>
                      <div className="meta">
                        <span >
                          {data.text}<Link style={{color:"#454545 "}}  href="#">{data.name}</Link>
                        </span>{" "}
                        <span>
                          {data.text2}<Link style={{color:"#454545 "}} href="#">{data.date}</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
             
            );
          })}
          </div>

</>
      
    
    // {/* <!-- End Blog Section --> */}
  );
};

export default Blog;

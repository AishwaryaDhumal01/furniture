import React from "react";

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
              <>
             
                <div  style={{lineHeight: "28px", padding:"20px"}} key={data.index} className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                  <div className="post-entry">
                    <a href="#" className="post-thumbnail">
                      <img
                        src={data.image}
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-content-entry">
                      <h3>
                        <a style={{color:"#454545 "}} href="#">{data.title}</a>
                      </h3>
                      <div className="meta">
                        <span >
                          {data.text}<a style={{color:"#454545 "}}  href="#">{data.name}</a>
                        </span>{" "}
                        <span>
                          {data.text2}<a style={{color:"#454545 "}} href="#">{data.date}</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
              </>
            );
          })}
          </div>

</>
      
    
    // {/* <!-- End Blog Section --> */}
  );
};

export default Blog;

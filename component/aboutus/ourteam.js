import React from "react";

const OURTEAM_DATA = [
  {
	image: "/assets/images/testimonialsimg/person_1.jpg",
	name: "Lawson Arnold",
	position:"CEO, Founder, Atty.",
    text: "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  buttontext: " Learn More ",
   
  },
  {
	image: "/assets/images/testimonialsimg/person_2.jpg",
	name: "Jeremy  Walker",
	position:"CEO, Founder, Atty.",
    text: "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  buttontext: " Learn More ",
   
  },
  {
    image: "/assets/images/testimonialsimg/person_3.jpg",
	name: "Patrik  White",
	position:"CEO, Founder, Atty.",
    text: "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  buttontext: " Learn More ",
   
  },
  {
	image: "/assets/images/testimonialsimg/person_4.jpg",
	name: "Kathryn Ryan",
	position:"CEO, Founder, Atty.",
    text: "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  buttontext: " Learn More ",
   
	

  }

];

const OurTeam = () => {
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Our Team</h2>
          </div>
        </div>

        <div className="row">
			{OURTEAM_DATA.map((data,index)=>{
				return(<>
					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img
              src={data.image}
              className="img-fluid mb-5"
            />
            <h3 clas>
              <a  style={{color:"black"}} href="#">
                <span className="" style={{color:"black"}}>{data.name}</span> 
              </a>
            </h3>
            <span className="d-block position mb-4">{data.position}</span>
            <p>
             {data.text}
            </p>
            <p className="mb-0">
              <a href="#" style={{color:"Black"}} className="more dark">
               {data.buttontext}<span className="icon-arrow_forward"></span>
              </a>
            </p>
          </div>
		  </>

				)
			})}
          
         
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

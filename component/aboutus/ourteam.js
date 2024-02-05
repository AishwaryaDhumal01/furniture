import Image from "next/image";
import Link from "next/link";
import React from "react";

const OURTEAM_DATA = [
  {
    id:1,
	image: "/assets/images/testimonialsimg/person_1.jpg",
	name: "Lawson Arnold",
	position:"CEO, Founder, Atty.",
    text: "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  buttontext: " Learn More ",
   
  },
  {
    id:2,
	image: "/assets/images/testimonialsimg/person_2.jpg",
	name: "Jeremy  Walker",
	position:"CEO, Founder, Atty.",
    text: "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  buttontext: " Learn More ",
   
  },
  {
    id:3,
    image: "/assets/images/testimonialsimg/person_3.jpg",
	name: "Patrik  White",
	position:"CEO, Founder, Atty.",
    text: "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  buttontext: " Learn More ",
   
  },
  {
    id:4,
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
				return(
					<div  key={data.id} className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <Image className="img-fluid mb-5"  src={data.image} alt="image" height={300} width={300}   />
            <h3 >
              <Link  style={{color:"black"}} href="#">
                <span className="" style={{color:"black"}}>{data.name}</span> 
              </Link>
            </h3>
            <span className="d-block position mb-4">{data.position}</span>
            <p>
             {data.text}
            </p>
            <p className="mb-0">
              <Link href="#" style={{color:"Black"}} className="more dark">
               {data.buttontext}<span className="icon-arrow_forward"></span>
              </Link>
            </p>
          </div>
		  

				)
			})}
          
         
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

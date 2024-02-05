import axios from "axios";
import { Card, Row, Col, Image } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import TopSection from "../landingPage/topSection";

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-01-02&sortBy=publishedAt&apiKey=db341db25dbe42aaaa78499b4f2f6ea4");
        setNewsData(response.data.articles);
      } catch (error) {
        console.log("Error fetching news data");
      }
    };

    fetchData();
  }, []);

  return (
    <>  
   
    <Image height={500} width={2000} alt="NewsPaper" src="/assets/images/topsecimg/news-2.jpg"></Image>
    <center><h1 style={{marginTop:"30px", fontWeight:"700"}}><span style={{color:"red"}}> N</span>ews</h1></center>
      <Row style={{padding:"20px",margin:"20px"}}>
      {newsData.map((data,index) => (
        <Col key={index} lg={3} md={5} sm={11}>
          <Card border="success" style={{ marginBottom: '20px',padding:'20px' }}>
            <Card.Header style={{fontSize:"20px", fontWeight:"500"}}>{data.title}</Card.Header>
            <Card.Body>
              <Card.Title>{data.source.name}</Card.Title>
              <Card.Text>
                {data.description}
              </Card.Text>
              <Card.Link href={data.url}>Read more</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>

  );
};

export default NewsPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from 'react-bootstrap/Card';

// const NewsPage = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5); // Adjust the number of items per page

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=db341db25dbe42aaaa78499b4f2f6ea4"
//         );

//         setNewsData(response.data.articles);
//       } catch (error) {
//         setError("Error fetching data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures useEffect runs only once on mount

//   // Calculate the index of the last item on the current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   // Calculate the index of the first item on the current page
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   // Get the current page items
//   const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       {currentItems.map((article, index) => (
//         <Card key={index} style={{ width: '18rem', margin: '10px' }}>
//           <Card.Body>
//             <Card.Title>{article.title}</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">{article.source.name}</Card.Subtitle>
//             <Card.Text>{article.description}</Card.Text>
//             <Card.Link href={article.url} target="_blank" rel="noopener noreferrer">
//               Read more
//             </Card.Link>
//           </Card.Body>
//         </Card>
//       ))}

//       {/* Pagination */}
//       <div>
//         {Array.from({ length: Math.ceil(newsData.length / itemsPerPage) }).map(
//           (item, index) => (
//             <button key={index} onClick={() => paginate(index + 1)}>
//               {index + 1}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewsPage;

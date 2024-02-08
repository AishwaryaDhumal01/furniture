// // userContext.js
// import { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';

// const API = 'https://fakestoreapi.com/products';

// const UserContext = createContext();

// const UserProvider = ({ children }) => {
//      const [products, setProducts] = useState([]);
//      const [loading, setLoading] = useState(true);
   
//   const fetchData = async(url) =>{
//     try {
//               const response = await axios.get(url);
//               setProducts(response.data);
//               setLoading(false);
//             } catch (error) {
//               console.error('Error fetching data:', error);
//               setLoading(false);
//             }
//   }

//   useEffect (() =>{
//     fetchData(API)
//   })

//   return (
//     <UserContext.Provider value={{ loading, products }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


// export { UserContext, UserProvider};

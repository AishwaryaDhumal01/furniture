import "bootstrap/dist/css/bootstrap.min.css";

import LayoutPage from "@/component/layout";
import"@/styles/my-sass.scss"
import "@/styles/style.css"
import { UserProvider } from "@/context/userContext";






export default function App({ Component, pageProps }) {
  return (
   
 
   <LayoutPage>
    <UserProvider>
  <Component {...pageProps} />
  </UserProvider>
  </LayoutPage>
 
 

  )
}

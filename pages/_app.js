import LayoutPage from "@/component/layout";
//import "@/styles/globals.css";
import"@/styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/tiny-slider.css"





export default function App({ Component, pageProps }) {
  return (
    <>
   
    <LayoutPage>
  <Component {...pageProps} />
  </LayoutPage>
 
  </>
  )
}

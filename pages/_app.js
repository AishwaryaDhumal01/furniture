import LayoutPage from "@/component/layout";
//import "@/styles/Home.module.css"
//import "@/styles/globals.css";
import"@/styles/my-sass.scss"
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

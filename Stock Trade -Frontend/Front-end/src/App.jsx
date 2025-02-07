import Footer from "./landing_page/Footer"
import Homepage from "./landing_page/home/Homepage"
import Navabar from "./landing_page/Navbar"
import SignUp from "./landing_page/signup/Signup"
import Aboutpage from "./landing_page/about/aboutpage"
import ProductsPage from "./landing_page/products/productsPage"
import Pricingpage from "./landing_page/pricing/Pricingpage"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SupportPage from "./landing_page/support/SupportPage"
import Login from "./landing_page/Login/Login"



function App() {
  const routes=createBrowserRouter(
    [
      {
        path:"/",
        element:<>
            <Navabar/>
             <Homepage/>
            <Footer/>
          </>
      },
      {
        path:"/signup",
        element:<>
          <Navabar/>
          <SignUp/>
          <Footer/>
        </>
      },
      {
        path:"/Login",
        element:<>
          <Navabar/>
          <Login/>
          <Footer/>
        </>
      },
      {
        path:"/about",
        element:<>
            <Navabar/>
            <Aboutpage/>
            <Footer/>
      </>
      },
      {
        path:"/products",
        element:<>
              <Navabar/>
              <ProductsPage/>
              <Footer/>
               </>
      },
      {
        path:"/pricing",
        element:<>
              <Navabar/>
              <Pricingpage/>
              <Footer/>
               </>
      },
      {
        path:"/support",
        element:<>
              <Navabar/>
              <SupportPage/>
              <Footer/>
               </>
      }
    ]
  )
  return (
    <> 
      <RouterProvider router={routes}/>
    </>
  )
}

export default App

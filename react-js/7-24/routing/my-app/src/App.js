import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import MainNavigation from "./components/MainNavigation";
import { Children } from "react";
import Root from "./pages/Root";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {

  //absolute path
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      errorElement:<Error/>,
      children : [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/products",
          element: <Products/>,
        },
        {
          path: "/products/:productId",
          element: <ProductDetails/>,
        },
      ]
    },
  
  ]);


  // //relative path
  // const router = createBrowserRouter([
  //   {
  //     path:"/root",
  //     element:<Root/>,
  //     errorElement:<Error/>,
  //     children : [
  //       {
  //         path: "",
  //         element: <Home/>,
  //       },
  //       {
  //         path: "about",
  //         element: <About/>,
  //       },
  //       {
  //         path: "products",
  //         element: <Products/>,
  //       },
  //       {
  //         path: "products/:productId",
  //         element: <ProductDetails/>,
  //       },
  //     ]
  //   },
  
  // ]);

  return <RouterProvider router={router} />;
}

export default App;

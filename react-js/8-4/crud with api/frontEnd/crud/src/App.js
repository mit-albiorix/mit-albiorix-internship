import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import { useEffect } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "addProduct",
          element: <AddProduct />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

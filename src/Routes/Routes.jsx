import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Products from "../Pages/DashboardPages/Products/Products";
import AboutUs from "../Pages/FrontEndPages/AboutUs/AboutUs";
import ContactUs from "../Pages/FrontEndPages/ContactUs/ContactUs";
import ErroPage from "../Pages/FrontEndPages/ErrorPage/ErroPage";
import Home from "../Pages/FrontEndPages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErroPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import MakeCategory from "../Components/DashboardComponent/MakeCategory/MakeCategory";
import MakeProduct from "../Components/DashboardComponent/MakeProduct/MakeProduct";
import Main from "../Layout/Main";
import Products from "../Pages/DashboardPages/Products/Products";
import AboutUs from "../Pages/FrontEndPages/AboutUs/AboutUs";
import ContactUs from "../Pages/FrontEndPages/ContactUs/ContactUs";
import ErroPage from "../Pages/FrontEndPages/ErrorPage/ErroPage";
import Home from "../Pages/FrontEndPages/Home/Home";
import Registration from "../Pages/FrontEndPages/Registration/Registration";

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
        children: [
          {
            path: "/products",
            element: <Products></Products>,
          },
          {
            path: "/products/makeCategory",
            element: <MakeCategory></MakeCategory>,
          },
          {
            path: "/products/makeProduct",
            element: <MakeProduct></MakeProduct>,
          },
        ],
      },
      {
        path: "/login",
        element: <Registration></Registration>,
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

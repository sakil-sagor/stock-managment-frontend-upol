import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllProductsPage from "../Pages/DashboardPages/Products/AllProductsPage/AllProductsPage";
import Products from "../Pages/DashboardPages/Products/Products";
import ViewProfile from "../Pages/DashboardPages/ViewProfile/ViewProfile";
import AboutUs from "../Pages/FrontEndPages/AboutUs/AboutUs";
import ContactUs from "../Pages/FrontEndPages/ContactUs/ContactUs";
import ErroPage from "../Pages/FrontEndPages/ErrorPage/ErroPage";
import Home from "../Pages/FrontEndPages/Home/Home";
import Registration from "../Pages/FrontEndPages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

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

      // {
      //   path: "/products",
      //   element: (
      //     <PrivateRoute>
      //       <Products></Products>
      //     </PrivateRoute>
      //   ),
      //   children: [
      //     {
      //       path: "/products",
      //       element: <Products></Products>,
      //     },
      //     {
      //       path: "/products/makeCategory",
      //       element: <MakeCategory></MakeCategory>,
      //     },
      //     {
      //       path: "/products/makeProduct",
      //       element: <MakeProduct></MakeProduct>,
      //     },
      //   ],
      // },
      {
        path: "/login",
        element: <Registration></Registration>,
      },
      {
        path: "/aboutUs",
        element: (
          <PrivateRoute>
            <AboutUs></AboutUs>
          </PrivateRoute>
        ),
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <ViewProfile></ViewProfile>,
          },
          {
            path: "/dashboard/products",
            element: <Products></Products>,
            children: [
              // {
              //   path: "/dashboard/products",
              //   element: <ViewProfile></ViewProfile>,
              // },
              {
                path: "/dashboard/products",
                element: <AllProductsPage></AllProductsPage>,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;

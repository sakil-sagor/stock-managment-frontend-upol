import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddProductsPage from "../Pages/DashboardPages/Products/AddProductsPage/AddProductsPage";
import AllProductsPage from "../Pages/DashboardPages/Products/AllProductsPage/AllProductsPage";
import CatogeryPage from "../Pages/DashboardPages/Products/CatogeryPage/CatogeryPage";
import Products from "../Pages/DashboardPages/Products/Products";
import ViewProfile from "../Pages/DashboardPages/ViewProfile/ViewProfile";
import AboutUs from "../Pages/FrontEndPages/AboutUs/AboutUs";
import ContactUs from "../Pages/FrontEndPages/ContactUs/ContactUs";
import ErroPage from "../Pages/FrontEndPages/ErrorPage/ErroPage";
import Home from "../Pages/FrontEndPages/Home/Home";
import ProductsFront from "../Pages/FrontEndPages/ProductsFront/ProductsFront";
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

      {
        path: "/products",
        element: <ProductsFront></ProductsFront>,
      },
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
              {
                path: "/dashboard/products",
                element: <AllProductsPage></AllProductsPage>,
              },
              {
                path: "/dashboard/products/all",
                element: <AllProductsPage></AllProductsPage>,
              },
              {
                path: "/dashboard/products/addproducts",
                element: <AddProductsPage></AddProductsPage>,
              },
              {
                path: "/dashboard/products/category",
                element: <CatogeryPage></CatogeryPage>,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;

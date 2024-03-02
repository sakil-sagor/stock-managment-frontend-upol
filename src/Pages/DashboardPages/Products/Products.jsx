import { Outlet } from "react-router-dom";
import TopNavbar from "../../../Components/Shared/SideNavbar/TopNavbar";
import useProducts from "../../../hooks/useProducts";

const Products = () => {
  const [products] = useProducts();

  const routes = [
    { id: 1, path: "/dashboard/products/all", name: "All Products" },
    { id: 2, path: "/dashboard/products/addproducts", name: "Add Products" },
  ];
  return (
    <div>
      <div>
        <div>
          <TopNavbar routes={routes}></TopNavbar>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Products;

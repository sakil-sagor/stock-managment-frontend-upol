import MakeCategory from "../../../Components/DashboardComponent/MakeCategory/MakeCategory";
import MakeProduct from "../../../Components/DashboardComponent/MakeProduct/MakeProduct";
import useProducts from "../../../hooks/useProducts";

const Products = () => {
  const [products] = useProducts();
  console.log(products);
  return (
    <div>
      <MakeProduct></MakeProduct>
      <MakeCategory></MakeCategory>
    </div>
  );
};

export default Products;

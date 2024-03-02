import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosSecure.get(
          "http://localhost:5000/api/v1/product/all",
          {
            withCredentials: true,
          }
        );
        console.log(response.data.data);
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return [products, loading, error];
};
export default useProducts;

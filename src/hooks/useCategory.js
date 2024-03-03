import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxios";

const useCategory = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosSecure.get(
          "http://localhost:5000/api/v1/product/category",
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
        setAllCategory(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [loading]);

  return [allCategory, setAllCategory, loading, setLoading, error];
};
export default useCategory;

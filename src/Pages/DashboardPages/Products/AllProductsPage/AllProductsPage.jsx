import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import SingleProduct from "../../../../Components/DashboardComponent/SingleProduct/SingleProduct";
import Loading from "../../../../Components/Shared/Loading/Loading";
import useProducts from "../../../../hooks/useProducts";

const AllProductsPage = () => {
  const [products] = useProducts();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortByPrice, setSortByPrice] = useState("");
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 9;

  useEffect(() => {
    let url = `http://localhost:5000/api/v1/product/allproduct?sort=${sortByPrice}&page=${
      page + 1
    }&limit=${limit}`;
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url);
        setAllRooms(response?.data?.data?.result);
        setCount(response?.data?.data?.pageCount);
        setTotal(response?.data?.data?.totalRoom);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [page, total, sortByPrice]);

  return (
    <div>
      <div className="py-4">
        <h2 className="text-sky-800 font-semibold text-2xl ">
          <AiFillDatabase className="inline mb-1"></AiFillDatabase> All
          Products:
        </h2>
        <div className="flex items-center justify-between mt-4 px-2">
          <p>
            Total Result: <span>{total}</span>
          </p>
          <div>
            <label htmlFor="">Sort By </label>

            <select
              className="border  border-gray-300 py-2  text-gray-600 bg-sky-50 rounded-full px-3"
              name="religion"
              id="religion"
              required
              onChange={(e) => setSortByPrice(e.target.value)}
            >
              <option className="" value="" disabled selected>
                --Sort By Price--
              </option>
              <option value="-price">Price High to Low </option>
              <option value="price">Price Low to High</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-md lg:grid-cols-3 gap-4 ">
            {products?.map((product) => (
              <SingleProduct
                key={product?._id}
                product={product}
              ></SingleProduct>
            ))}
          </div>
        )}
      </div>
      <div className=" ">
        {total ? (
          <>
            <hr className="border-2 border-t-white mt-16" />
            <div className=" mb-16  flex items-center mt-8">
              <p className="text-sky-800 font-semibold mr-3"> Total Page : </p>
              <div>
                {[...Array(count).keys()].map((number) => (
                  <button
                    className={`${
                      page === number ? "bg-sky-700 " : " bg-gray-500"
                    } text-white rounded  mr-4 py-1 px-4`}
                    key={number}
                    onClick={() => setPage(number)}
                  >
                    {number + 1}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default AllProductsPage;

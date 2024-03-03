import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blue from "../../../assets/blue.gif";
import useCategory from "../../../hooks/useCategory";

const MakeCategory = () => {
  const [allCategory, setAllCategory, loading, setLoading] = useCategory();
  // const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
  });

  // get category name
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit form for make category
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:5000/api/v1/product/category", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          toast.success("success");
          setFormData({
            category: "",
          });
        }

        setLoading(false);
        if (data.error) {
          setFormData({
            category: "",
          });

          toast.error(" failed");
        }
      });
  };
  // delete category from db
  const handleRemovecategory = async (id) => {
    setLoading(true);
    if (id) {
      const url = `http://localhost:5000/api/v1/product/category/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.data.deletedCount > 0) {
            toast.success("success");
            const remainingData = allCategory.filter((user) => user._id !== id);
            setAllCategory(remainingData);
          }
        });
      setLoading(false);
    }
  };

  return (
    <div>
      <div className=" p-2 text-sm">
        <div className=" ">
          <div className="w-full  m-auto pt-4 flex gap-8">
            <div className="w-1/2 ">
              <div className=" ">
                <div className=" border shadow-md shadow-blue-300 px-2 py-2 md:p-2 text-center rounded-md">
                  <h2 className="text-xl font-bold text-blue-700">
                    Add Category
                  </h2>
                </div>
                <div className=" mt-4 ">
                  <form
                    className=" border shadow-xl shadow-blue-300 px-2 py-4 md:p-2 rounded-md"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-col w-full">
                      <label
                        className=" text-gray-600 font-semibold block "
                        htmlFor="category"
                      >
                        Name
                      </label>
                      <input
                        required
                        className="py-1 px-2 rounded-md border border-gray-300"
                        type="text"
                        name="category"
                        placeholder="Category Name"
                        value={formData.category}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className=" mt-4 ">
                      <div className="flex items-center justify-center h-10  bg-indigo-500 rounded">
                        <button className=" ">
                          <img
                            className={`w-8 text-center  mx-auto ${
                              !loading && "hidden"
                            }`}
                            src={blue}
                            alt=""
                          />
                        </button>

                        <button
                          className={`w-full h-full  text-white py-18 ${
                            loading && "hidden"
                          }`}
                        >
                          <span>Add Category</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-1/2 ">
              <table className="w-full table-auto border border-spacing-y-6">
                <thead className="">
                  <tr className="text-left border">
                    <th className="px-4 py-2">Category</th>

                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>

                {allCategory?.map((cat, index) => (
                  <tr
                    key={cat.id}
                    className={index % 2 === 0 ? "bg-gray-200 " : ""}
                  >
                    <td className="px-4 py-4  text-blue-500 ">
                      {cat.category}
                    </td>

                    <td className="px-4 py-4">
                      <button
                        onClick={() => handleRemovecategory(cat?._id)}
                        className="bg-red-700 text-white px-2 py-1 rounded hover:bg-red-800 "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          theme="colored"
        />
      </div>
    </div>
  );
};

export default MakeCategory;

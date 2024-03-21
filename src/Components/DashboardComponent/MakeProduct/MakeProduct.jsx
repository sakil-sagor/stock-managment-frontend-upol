import { useState } from "react";
import useCategory from "../../../hooks/useCategory";

const MakeProduct = () => {
  const [allCategory] = useCategory();
  const [product, setProduct] = useState({
    productName: "",
    category: "",
    brand: "",
    origin: "",
    quantity: "",
    buyPrice: "",
    costPrice: "",
    salePrice: "",
    batch: "",
    image: "",
    showroom: "",
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [inputName]: value });
  };
  const handleDetailsSubmit = (e) => {
    e.preventDefault();

    console.log(product);
  };
  return (
    <div>
      <div>
        <div className="text-sm">
          <form onSubmit={handleDetailsSubmit}>
            <div>
              <label htmlFor=""> Product Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="productName"
                className="border "
              />
            </div>
            <div className="my-4">
              <label htmlFor=""> category</label>
              <input
                onChange={handleChange}
                type="text"
                name="category"
                className="border "
              />
            </div>

            <div className="my-4">
              <label htmlFor=""> brand</label>
              <input
                onChange={handleChange}
                type="text"
                name="brand"
                className="border "
              />
            </div>
            <div className="my-4">
              <label htmlFor=""> origin</label>
              <input
                onChange={handleChange}
                type="text"
                name="origin"
                className="border "
              />
            </div>
            <div className="my-4">
              <label htmlFor=""> quantity</label>
              <input
                onChange={handleChange}
                type="text"
                name="quantity"
                className="border "
              />
            </div>
            <div className="my-4">
              <label htmlFor=""> buyPrice</label>
              <input
                onChange={handleChange}
                type="text"
                name="buyPrice"
                className="border "
              />
            </div>
            <div className="my-4">
              <label htmlFor=""> costPrice</label>
              <input
                onChange={handleChange}
                type="text"
                name="costPrice"
                className="border "
              />
            </div>
            <div className="my-4">
              <label htmlFor=""> salePrice</label>
              <input
                onChange={handleChange}
                type="text"
                name="salePrice"
                className="border "
              />
            </div>
            <div className="my-4">
              <label htmlFor=""> batch</label>
              <input
                onChange={handleChange}
                type="text"
                name="batch"
                className="border "
              />
            </div>
            <div className="my-4">
              <label htmlFor=""> showroom</label>
              <input
                onChange={handleChange}
                type="text"
                name="showroom"
                className="border "
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeProduct;

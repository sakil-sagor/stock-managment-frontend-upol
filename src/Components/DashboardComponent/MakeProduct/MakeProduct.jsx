import { useState } from "react";

const MakeProduct = () => {
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
        <div>
          <form onSubmit={handleDetailsSubmit}>
            <div>
              <input
                onChange={handleChange}
                type="text"
                name="productName"
                id="productName"
                className="border "
              />
            </div>
            <div className="my-4">
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id="email"
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

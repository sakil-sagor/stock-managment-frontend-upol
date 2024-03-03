const SingleProduct = ({ product }) => {
  const { productName, productId, category, image } = product;
  return (
    <div>
      <div className="shadow-xl bg-white rounded hover:shadow-2xl border p-2 flex  flex-col h-full">
        <div>
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <p>{productId}</p>
            <p>{productName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

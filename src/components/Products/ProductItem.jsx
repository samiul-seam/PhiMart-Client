import defaultImage from "../../assets/default_product.jpg";

const ProductList = ({ product }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={
              product.images.length > 0 ? product.images[0].image : defaultImage
            }
            alt="Shoes"
            className="rounded-xl h-54 w-full object-cover"
          />
        </figure>
        <div className="flex flex-col items-center justify-between">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{product.name}</h2>
            <h3 className="card-actions mt-1">${product.price}</h3>
            <p className="text-sm line-clamp-2 mt-2">{product.description}</p>
          </div>
          <div className="card-actions mt-4">
            <button className="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

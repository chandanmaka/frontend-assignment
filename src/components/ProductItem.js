import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div className="p-2 bg-white rounded-md">
      <img
        src={product.image}
        alt={product.title}
        className="h-52 w-full object-contain"
      />
      <div className="text-center my-2">
        <strong className="font-bold">{product.title}</strong>
        <p className="text-slate-500">
          {product.description.substring(0, 30)}....
        </p>
        <p className="font-bold italic my-2 text-lg">
          Price : Rs.{product.price}
        </p>
        <button className="bg-orange-300 text-white font-bold text-lg cursor-pointer rounded-md px-4 py-2 ">
          <Link to={`/product/${product.id}`}>View Item</Link>
        </button>
      </div>
    </div>
  );
}

export default ProductItem;

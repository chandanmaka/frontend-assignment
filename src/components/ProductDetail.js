function ProductDetail({ product }) {
  return (
    <div className="mt-16 w-full h-screen flex items-center justify-center px-4">
      <div className="container  rounded-xl md:flex flex-1 m-6 ">
        <div className="md:w-1/2  w-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="h-96 object-contain w-full"
          />
        </div>
        <div className="md:w-1/2  w-full rounded-b-xl md:rounded-r-xl md:rounded-bl-none  bg-[#F6E1C3]">
          <div className="flex flex-col items-center pt-4">
            <div className="font-bold text-2xl">{product.title}</div>
            <div className="text-xs my-8 mx-8 text-slate-600 text-center">
              {product.description}
            </div>
            <div className="font-normal m-6 text-xl">
              Category : {product.category.toUpperCase()}
            </div>
            <div className="italic m-2">
              Price : <strong>Rs.{product.price}</strong>
            </div>
            <div className="m-6 font-light">
              Rating : ⭐ {product.rating.rate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

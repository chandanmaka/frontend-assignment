import ProductItem from "./ProductItem";

function ProductsList({ products }) {
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="py-4 my-8 border-8 w-48 text-white text-xl rounded-2xl border-white text-center">
        All the Products
      </div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8 gap-4">
          {products ? (
            products.map((product) => <ProductItem product={product} />)
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;

// {"id":1,
// "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price":109.95,
// "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category":"men's clothing", ==========
// "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating":{"rate":3.9,"count":120}} ================

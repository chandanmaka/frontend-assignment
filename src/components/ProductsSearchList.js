import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function ProductsSearchList({ receivedProducts }) {
  const [search, setSearch] = useState("");
  const [products, setListOfProducts] = useState(receivedProducts);
  useEffect(
    function () {
      const newProducts = receivedProducts.filter((item) =>
        item.title.toLowerCase().includes(search)
      );
      console.log(newProducts);
      setListOfProducts(newProducts);
    },
    [search, receivedProducts]
  );
  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="py-4 my-8 border-8 w-1/2 text-white text-xl rounded-2xl border-white text-center">
        <span>Search the items :</span>
        <input
          className="shadow appearance-none border rounded ml-4 w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search....."
        ></input>
      </div>

      {products.length !== 0 ? (
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8 gap-4">
            {products.map((product) => (
              <ProductItem product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className=" text-3xl text-center text-white flex pb-4 items-center bg-orange-300 justify-center h-screen w-full ">
          Product Not Found !! 😓
        </div>
      )}
    </div>
  );
}

export default ProductsSearchList;

// {"id":1,
// "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price":109.95,
// "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category":"men's clothing", ==========
// "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating":{"rate":3.9,"count":120}} ================

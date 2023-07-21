import NavBar from "../components/NavBar";
import axios from "axios";
import { useQuery } from "react-query";
import ProductsSearchList from "../components/ProductsSearchList";

async function fetchProducts() {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
}
function Search({ open, setOpen }) {
  const { data, error, isError, isLoading } = useQuery(
    "products",
    fetchProducts
  );
  console.log(data);
  return (
    <div>
      {isLoading && (
        <>
          <NavBar open={open} setOpen={setOpen} />
          <div className="mt-16 text-5xl text-center font-black px-8 text-white flex items-center justify-center h-screen ">
            Loading.... ⭕
          </div>
        </>
      )}

      {isError && (
        <>
          <NavBar open={open} setOpen={setOpen} />
          <div className="mt-16 text-5xl text-center font-black px-8 text-white flex items-center justify-center h-screen ">
            Error! {error.message} ❌
          </div>
        </>
      )}
      {!isError && !isLoading && (
        <>
          <NavBar open={open} setOpen={setOpen} />
          <ProductsSearchList receivedProducts={data} />
        </>
      )}
    </div>
  );
}

export default Search;

import { useQuery } from "react-query";
import NavBar from "../components/NavBar";
import axios from "axios";

async function fetchProducts() {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
}

function Products() {
  const { data, error, isError, isLoading } = useQuery(
    "products",
    fetchProducts
  );
  console.log(data);
  return (
    <div>
      {isLoading && <p>Loading....</p>}
      {isError && <p>Error! {error.message}</p>}
      {!isError && !isLoading && (
        <>
          <NavBar />
          products
        </>
      )}
    </div>
  );
}

export default Products;

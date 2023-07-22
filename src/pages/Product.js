import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useQuery } from "react-query";
import axios from "axios";
import ProductDetail from "../components/ProductDetail";

async function fetchProduct(id) {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
}

function Product({ open, setOpen }) {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery("product", () =>
    fetchProduct(id)
  );
  console.log(data);
  return (
    <>
      {isLoading && <div>Loading.......</div>}
      {isError && <div>Error! {error.message}</div>}
      {!isLoading && !isError && (
        <div>
          <NavBar open={open} setOpen={setOpen} />
          <ProductDetail product={data}/>
          
        </div>
      )}
    </>
  );
}

export default Product;

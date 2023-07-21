import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Search from "./pages/Search";
import { useState } from "react";

function App() {
  let [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage open={open} setOpen={setOpen} />} />
        <Route
          path="/products"
          element={<Products open={open} setOpen={setOpen} />}
        />
        <Route
          path="/product/:id"
          element={<Product open={open} setOpen={setOpen} />}
        />
        <Route
          path="/search"
          element={<Search open={open} setOpen={setOpen} />}
        />
        <Route
          path="*"
          element={<PageNotFound open={open} setOpen={setOpen} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

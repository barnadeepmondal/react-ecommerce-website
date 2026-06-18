import { createContext, useEffect, useState } from "react";

 const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function callAPI() {
      let data = await fetch("https://dummyjson.com/products");
      let respons = await data.json();
      setProduct(respons.products);
    }
    callAPI();
  }, []);
  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;

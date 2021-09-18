import React, { createContext, useState } from "react";
import menuData from "../Components/data";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(menuData);

  return (
    <>
      <ProductsContext.Provider value={{ products }}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsContextProvider;

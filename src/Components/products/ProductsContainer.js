import React, { useState } from "react";
import MenuComponent from "./menuComponent";
import ProductsCards from "./productsCards";
import {ProductsContext} from "./productsContext";
import {products} from "./products";

const ProductsContainer = () => {
  return (
    <>
      <div>ProductsContainer</div>
      <MenuComponent />
      <ProductsContext.Provider value={{products}}>
        <ProductsCards />
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsContainer;

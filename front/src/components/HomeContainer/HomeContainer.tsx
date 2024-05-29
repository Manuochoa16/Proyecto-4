import React from "react";
import productsToPreload from "@/helpers/products";
import Cards from "../Cards/Cards";

const HomeContainer = () => {
  return (
    <div>
      <Cards products={productsToPreload} />
    </div>
  );
};

export default HomeContainer;

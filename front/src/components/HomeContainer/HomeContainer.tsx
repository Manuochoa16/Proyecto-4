import React from "react";
import Cards from "../Cards/Cards";
import { getProductsDB } from "@/helpers/product.helper";
import ImageButtons from "../ImageButtons/ImageButtons";

const HomeContainer = async () => {
  const products = await getProductsDB();
  return (
    <div className="container mx-auto p-4">
      <ImageButtons />
      <Cards products={products} />
    </div>
  );
};

export default HomeContainer;

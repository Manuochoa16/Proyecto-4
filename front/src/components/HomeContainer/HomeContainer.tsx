import React from "react";
import productsToPreload from "@/helpers/products";
import Card from "../Card/Card";

const HomeContainer = () => {
  return (
    <div>
      {productsToPreload &&
        productsToPreload?.map((product) => {
          return <Card key={product.id} {...product} />;
        })}
    </div>
  );
};

export default HomeContainer;

import { IProduct } from "@/types";
import React from "react";
import Card from "../Card/Card";
import Link from "next/link";

const Cards = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg w-full p-4 md:px-6 lg:px-8 sm:pl-0 sm:pr-4">
        {products &&
          products?.map((product) => {
            return (
              <Link key={product.id} href={`/product/${product.id}`}>
                <Card key={product.id} {...product} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;

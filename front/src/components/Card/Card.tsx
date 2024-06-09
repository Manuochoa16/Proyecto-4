import categoriesToPreLoad from "@/helpers/category";
import { IProduct } from "@/types";
import React from "react";
import "./Card.css";

const Card: React.FC<IProduct> = ({
  name,
  price,
  image,
  description,
  stock,
  categoryId,
}) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white bg-opacity-60 text-black rounded-xl p-6 border border-gray-300 shadow-md my-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl h-128">
      <div className="flex justify-center items-center h-48">
        <img
          className="h-full w-auto object-cover rounded-xl"
          src={image}
          alt="imagen del producto"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-red-600 text-lg font-bold text-center">{name}</h2>
        <p className="text-gray-600 mb-4 text-center">{description}</p>
        <p className="text-gray-700 text-center">
          Category: {categoriesToPreLoad[categoryId].name}
        </p>
        <p className="text-gray-700 text-center">Stock: {stock}</p>
        <div className="text-right text-red-600 text-xl font-bold mt-4">
          ${price}
        </div>
      </div>
    </div>
  );
};

export default Card;

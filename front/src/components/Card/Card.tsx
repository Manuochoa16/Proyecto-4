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
    <div className="flex justify-center w-full">
      <div className="card-custom-height w-3/5 flex items-center bg-white bg-opacity-60 text-black rounded-xl p-6 border border-gray-300 shadow-md m-4">
        <img
          className="w-auto h-[250px] object-cover rounded-xl"
          src={image}
          alt="imagen del producto"
        />
        <div className="w-3/4 pl-6">
          <h2 className="text-red-600 text-lg font-bold">{name}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-gray-700">
            Category: {categoriesToPreLoad[categoryId].name}
          </p>
          <p className="text-gray-700">Stock: {stock}</p>
          <div className="text-right text-red-600 text-xl font-bold mt-4">
            ${price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import { IProduct } from "@/types";
import React from "react";

const Card: React.FC<IProduct> = ({
  name,
  price,
  image,
  description,
  stock,
  categoryId,
}) => {
  return (
    <div className="flex flex-col items-center justify-between bg-slate-400 text-black rounded-x1 p-4 border gap-2 m-4 max-w-[300px] h-[500px] shadow">
      <img src={image} alt="imagen del producto" />
      <h2>{name} </h2>
      <p>{price} </p>
      <p>${description}</p>
      <p>Stock: {stock}</p>
    </div>
  );
};

export default Card;

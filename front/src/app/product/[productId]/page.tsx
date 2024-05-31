"use client";
import { getProductById } from "@/helpers/product.helper";
import { IProduct, userSession } from "@/types";
import React, { useEffect, useState } from "react";

const DetailProduct = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState<IProduct>();
  const [userData, setUserData] = useState<userSession>();
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(JSON.parse(userData!));
    }

    const fetchData = async () => {
      const product = await getProductById(params.productId);
      setProduct(product);
    };

    fetchData();
  }, []);

  const handleAddToCart = () => {
    if (!userData?.token) alert("No ingresaste a tu cuenta");
  };

  return (
    <div className="w-full items-center justify-center flex flex-col">
      <div className="w-1/2 items-center justify-center flex flex-col bg-gray-200 p-6 rounded my-4">
        <h2>{product?.name}</h2>
        <img src={product?.image} alt={product?.image} />
        <p>{product?.description}</p>
        <p>Price: {product?.price}</p>
        <p>Stock: {product?.stock}</p>
        <button
          onClick={handleAddToCart}
          className="rounded-sm bg-white hover:bg-gray-400 text-black p-4 mt-2"
        >
          Agerar al carrito
        </button>
      </div>
    </div>
  );
};

export default DetailProduct;

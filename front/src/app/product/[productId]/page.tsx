"use client";
import { useAuth } from "@/context/AuthContext";
import { getProductById } from "@/helpers/product.helper";
import { IProduct, userSession } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DetailProduct = ({ params }: { params: { productId: string } }) => {
  const router = useRouter();
  const [product, setProduct] = useState<IProduct>();
  const { userData } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const product = await getProductById(params.productId);
      setProduct(product);
    };

    fetchData();
  }, []);

  const handleAddToCart = (e: any) => {
    if (!userData?.token) {
      alert("No ingresaste a tu cuenta");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some((product: IProduct) => {
        if (product.id === Number(e?.target?.id!)) return true;
        return false;
      });
      if (productExist) {
        alert("Estos son los productos de tu carrito");
        router.push("/cart");
      } else {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Producto agregado a tu carrito");
        router.push("/cart");
      }
    }
  };

  return (
    <div className="w-full items-center justify-center flex flex-col">
      <div className="w-full sm:w-3/4 md:w-1/2 items-center justify-center flex flex-col bg-gray-200 p-6 rounded my-4">
        <h2 className="text-center text-2xl font-bold">{product?.name}</h2>
        <img
          className="w-full h-auto rounded mt-4"
          src={product?.image}
          alt={product?.image}
        />
        <p className="mt-4">{product?.description}</p>
        <p className="mt-2 text-lg font-semibold">Price: ${product?.price}</p>
        <p className="mt-2 text-lg">Stock: {product?.stock}</p>
        <button
          id={product?.id.toString()}
          onClick={handleAddToCart}
          className="rounded-sm bg-white hover:bg-gray-400 text-black p-4 mt-4"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default DetailProduct;

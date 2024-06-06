"use client";
import { createOrder } from "@/helpers/orders.helper";
import { IProduct, userSession } from "@/types";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [userData, setUserData] = useState<userSession>();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData: userSession = JSON.parse(
        localStorage.getItem("userSession")!
      );
      setUserData(userData);
      !userData?.token && redirect("/login");
    }

    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart) {
      let totalcart = 0;
      storedCart?.map((item: IProduct) => {
        totalcart += item.price;
      });
      setTotal(totalcart);
      setCart(storedCart);
    }
  }, []);

  const handleClick = async () => {
    const idProducts = new Set(cart.map((product) => product.id));
    await createOrder(Array.from(idProducts), userData?.token!);

    alert("Compra realizada correctamente");
    setCart([]);
    setTotal(0);
    localStorage.setItem("cart", "[]");
  };

  const handleAddToCart = (e: any) => {
    if (!userData?.token) {
      alert("Debes iniciar sesión");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some((product: IProduct) => {
        if (product.id === Number(e?.target?.id)) return true;
        return false;
      });
      if (productExist) {
        alert("Este producto ya existe en tu carrito de compras");
      } else {
        const product = cart.find(
          (product: IProduct) => product.id === Number(e?.target?.id)
        );
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("El producto ha sido añadido al carrito");
        router.push("/cart");
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4 mb-4">
        {cart?.length > 0 ? (
          cart?.map((cartItem) => (
            <div
              key={cartItem.id}
              className="flex justify-between p-2 border-b"
            >
              <div>
                <p className="font-bold text-lg">{cartItem.name}</p>
              </div>
              <div>
                <p className="text-gray-700">${cartItem.price}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-4">
            <p>Aún no hay nada en el carrito</p>
          </div>
        )}
      </div>
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4">
        <p className="text-xl font-bold">Total: ${total}</p>
        <button
          onClick={handleClick}
          className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Comprar!
        </button>
      </div>
    </div>
  );
};

export default Cart;

"use client";
import { register } from "@/helpers/auth.helper";
import { validateRegisterForm } from "@/helpers/formValidation";
import { RegisterErrorProps, RegisterProps } from "@/types";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<RegisterProps>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  });
  const [errorUser, setErrorUser] = useState<RegisterErrorProps>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await register(dataUser);
      console.log(response);

      alert("Registro exitoso");
      router.push("/login");
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    const errors = validateRegisterForm(dataUser);
    setErrorUser(errors);
  }, [dataUser]);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-gray-700 bg-opacity-50 rounded-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-center text-white">
            Registrate
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email-adress"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              id="email-adress"
              name="email"
              type="email"
              value={dataUser.email}
              required
              onChange={handleChange}
              placeholder="mail@mail.com"
              className="w-full p-2 mt-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            {errorUser.email && (
              <p className="mt-2 text-red-500 text-sm">{errorUser.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={dataUser.password}
              required
              onChange={handleChange}
              placeholder="********"
              className="w-full p-2 mt-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            {errorUser.password && (
              <p className="mt-2 text-red-500 text-sm">{errorUser.password}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={dataUser.name}
              required
              onChange={handleChange}
              placeholder="tu nombre"
              className="w-full p-2 mt-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            {errorUser.name && (
              <p className="mt-2 text-red-500 text-sm">{errorUser.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-white"
            >
              Dirección
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={dataUser.address}
              required
              onChange={handleChange}
              placeholder="Calle y número"
              className="w-full p-2 mt-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            {errorUser.address && (
              <p className="mt-2 text-red-500 text-sm">{errorUser.address}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white"
            >
              Teléfono
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={dataUser.phone}
              required
              onChange={handleChange}
              placeholder="1122334455"
              className="w-full p-2 mt-2 bg-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            {errorUser.phone && (
              <p className="mt-2 text-red-500 text-sm">{errorUser.phone}</p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

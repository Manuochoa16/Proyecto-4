"use client";
import { useAuth } from "@/context/AuthContext";
import { login } from "@/helpers/auth.helper";
import { validateLoginForm } from "@/helpers/formValidation";
import { LoginErrorProps, LoginProps } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const { userData, setUserData } = useAuth();
  const [dataUser, setDataUser] = useState<LoginProps>({
    email: "",
    password: "",
  });
  const [errorUser, setErrorUser] = useState<LoginErrorProps>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await login(dataUser);
      const { token, user } = response;

      setUserData({ token, userData: user });

      alert("Ingreso exitoso");
      router.push("/");
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    const errors = validateLoginForm(dataUser);
    setErrorUser(errors);
  }, [dataUser]);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-gray-700 bg-opacity-50 rounded-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-center text-white">Ingresa</h2>
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

          <div className="mb-6">
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

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Enviar
            </button>

            <div>
              <p>No estas registrado?</p>
              <button>Registrate acá</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

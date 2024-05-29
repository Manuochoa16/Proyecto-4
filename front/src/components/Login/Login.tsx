"use client";
import { validateLoginForm } from "@/helpers/formValidation";
import { LoginErrorProps, LoginProps } from "@/types";
import React, { useState, useEffect } from "react";

const Login = () => {
  const [dataUser, setDataUser] = useState<LoginProps>({
    email: "",
    password: "",
  });
  const [errorUser, setErrorUser] = useState<LoginErrorProps>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Submit exitoso");
  };

  useEffect(() => {
    const errors = validateLoginForm(dataUser);
    setErrorUser(errors);
  }, [dataUser]);

  return (
    <div>
      <div>
        <h2>Ingresa</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email-addres">Email</label>
          <input
            id="email-adress"
            name="email"
            type="email"
            value={dataUser.email}
            required
            onChange={handleChange}
            placeholder="mail@mail.com"
          />
          {errorUser.email && <p>{errorUser.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            value={dataUser.password}
            required
            onChange={handleChange}
            placeholder="********"
          />
          {errorUser.password && <p>{errorUser.password}</p>}
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

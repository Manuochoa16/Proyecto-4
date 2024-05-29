"use client";
import { validateRegisterForm } from "@/helpers/formValidation";
import { RegisterErrorProps, RegisterProps } from "@/types";
import React, { useState, useEffect } from "react";

const Register = () => {
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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Registro exitoso");
  };

  useEffect(() => {
    const errors = validateRegisterForm(dataUser);
    setErrorUser(errors);
  }, [dataUser]);

  return (
    <div>
      <div>
        <h2>Registrate</h2>
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
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            value={dataUser.name}
            required
            onChange={handleChange}
            placeholder="tu nombre"
          />
          {errorUser.name && <p>{errorUser.name}</p>}
        </div>

        <div>
          <label htmlFor="address">Dirección</label>
          <input
            id="address"
            name="address"
            type="text"
            value={dataUser.address}
            required
            onChange={handleChange}
            placeholder="Calle y numero"
          />
          {errorUser.address && <p>{errorUser.address}</p>}
        </div>

        <div>
          <label htmlFor="phone">Telefono</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={dataUser.phone}
            required
            onChange={handleChange}
            placeholder="1122334455"
          />
          {errorUser.phone && <p>{errorUser.phone}</p>}
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

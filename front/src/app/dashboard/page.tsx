"use client";

import { userSession } from "@/types";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedUserData = localStorage.getItem("userSession");
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        console.log("Parsed User Data: ", parsedUserData);

        let actualUserData = parsedUserData;
        while (actualUserData?.userData) {
          actualUserData = actualUserData.userData;
        }
        setUserData(actualUserData);
      } else {
        console.log("No user data found in localStorage");
      }
    }
  }, []);

  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className=" flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Bienvenido <br></br>
          {userData.name}
        </h1>
        <p className="text-lg text-center">
          Tu dirección es: {userData.address}
        </p>
        <p className="text-lg text-center">Tu telefono es: {userData.phone}</p>
        <p className="text-lg text-center">Tu mail es: {userData.email}</p>
      </div>
    </div>
  );
};

export default Dashboard;

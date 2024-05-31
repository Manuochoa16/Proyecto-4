import { LoginProps, RegisterProps } from "../types/index";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: RegisterProps) {
  try {
    const res = await fetch(`${apiUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      return res.json();
    } else {
      alert("Falló el registro");
      throw new Error("Falló el registro");
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function login(userData: LoginProps) {
  try {
    const res = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      return res.json();
    } else {
      alert("Falló el login");
      throw new Error("Falló el login");
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

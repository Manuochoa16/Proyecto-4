const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// export async function createOrder(products) {};

export async function getOrders(token: string) {
  try {
    const res = await fetch(`${apiUrl}/users/orders`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        Authorization: token,
      },
    });
    const orders = await res.json();
    return orders;
  } catch (error: any) {
    throw new Error(error);
  }
}

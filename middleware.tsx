import "isomorphic-unfetch";
import { OrderDb, OrderRes, Order } from "./types";

const isDev = process.env.NODE_ENV !== "production";
const apiRoute = isDev
  ? "http://localhost:3000/api"
  : "https://covid-grocery.herokuapp.com/api/";

console.log(process.env);

export const getOrderById = async (id: string): Promise<OrderDb> =>
  fetch(`${apiRoute}/orders/${id}`).then(res => res.json());

export const getOrders = (): Promise<OrderRes> =>
  fetch(`${apiRoute}/orders`).then(res => res.json());

export const addOrder = (order: Order) => {
  console.log(JSON.stringify(order));

  fetch(`${apiRoute}/orders`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(order)
  });
};

import "isomorphic-unfetch";
import { OrderDb, OrderRes, Order } from "./types";

const isDev = process.env.NODE_ENV !== "production";
const apiRoute = isDev
  ? "http://localhost:3000/api"
  : "https://covid-delivery.now.sh/api/";

export const getOrderById = async (id: string): Promise<OrderDb> =>
  fetch(`${apiRoute}/orders/${id}`).then(res => res.json());

export const getOrders = (): Promise<OrderRes> =>
  fetch(`${apiRoute}/orders`).then(res => res.json());

export const addOrder = (order: Order) => {
  fetch(`${apiRoute}/orders`, {
    method: "POST",
    body: JSON.stringify(order)
  });
};

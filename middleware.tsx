import { OrderDb, OrderRes, Order } from "./types";
import "isomorphic-unfetch";

const apiRoute = "http://localhost:3000/api";

export const getOrderById = async (id: string): Promise<OrderDb> =>
  fetch(`${apiRoute}/order?id=${id}`).then(res => res.json());

export const getOrders = (): Promise<OrderRes> =>
  fetch(`${apiRoute}/orders`).then(res => res.json());

export const addOrder = (order: Order) => {
  fetch("http://localhost:3000/api/createOrder", {
    method: "POST",
    body: JSON.stringify(order)
  });
};

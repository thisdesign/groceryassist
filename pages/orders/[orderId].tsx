import React from "react";
import { NextPage } from "next";
import Error from "next/error";

import { OrderDetail } from "../../components";
import { OrderDb } from "../../types";

const OrderPage: NextPage<{ data: OrderDb }> = ({ data }) => {
  if (data) {
    return <OrderDetail data={data} />;
  }
  return <Error statusCode={404} />;
};

OrderPage.getInitialProps = async ({ query }) => {
  const data: OrderDb = await fetch(
    `http://localhost:3000/api/order?id=${query.orderId}`
  ).then(res => res.json());

  return { data };
};
export default OrderPage;

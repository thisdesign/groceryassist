import React from "react";
import { NextPage } from "next";
import Error from "next/error";

import { OrderDetail } from "../../../components";
import { OrderDb } from "../../../types";
import { getOrderById } from "../../../middleware";

const OrderPage: NextPage<{ data: OrderDb }> = ({ data }) => {
  if (data) {
    return <OrderDetail data={data} />;
  }
  return <Error statusCode={404} />;
};

OrderPage.getInitialProps = async ({ query }) => {
  const orderId = query.orderId.toString();
  const data: OrderDb = await getOrderById(orderId);
  return { data };
};
export default OrderPage;

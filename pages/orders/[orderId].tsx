import React from "react";
import { NextPage } from "next";
import Error from "next/error";
import { ORDERS, Order } from "../../constants";
import { LineItem } from "../../components";

const OrderPage: NextPage<{ orderData: Order }> = ({ orderData }) => {
  if (orderData) {
    return <LineItem data={orderData} />;
  }
  return <Error statusCode={404} />;
};

OrderPage.getInitialProps = async ({ query }) => {
  const orderData = ORDERS.filter(
    item => item.id.toString() === query.orderId
  )[0];

  return { orderData };
};
export default OrderPage;

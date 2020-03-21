import React from "react";
import { NextPage } from "next";
import Error from "next/error";
import { ORDERS, USERS, Order } from "../../constants";
import { OrderDetail } from "../../components";
import { OrderDb } from "../../types";

const OrderPage: NextPage<{ data: OrderDb }> = ({ data }) => {
  if (data) {
    return (
      <div>
        <br />
        <br />
        <h1>0 / {data.items.length}</h1>
        <h2>items fulfilled for {data.name}</h2>
        <br />
        <br />
        <hr />
        {data.items.map(item => (
          <div>
            <h2>
              [<>&nbsp;&nbsp;</>] {item.name}
            </h2>
            <hr />
          </div>
        ))}
      </div>
    );
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

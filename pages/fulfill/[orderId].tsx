import React from "react";
import { NextPage } from "next";
import Error from "next/error";
import { ORDERS, USERS, Order } from "../../constants";
import { OrderDetail } from "../../components";

const OrderPage: NextPage<{ orderData: Order }> = ({ orderData }) => {
  if (orderData) {
    const user = USERS.filter(user => user.id === orderData.userId)[0];

    return (
      <div>
        <h1>0 / {orderData.items.length}</h1>
        <h2>items fulfilled for {user.name}</h2>
        <br />
        <br />
        <hr />
        {orderData.items.map(item => (
          <div>
            <h2>
              [{<>&nbsp;&nbsp;</>}] {item.name}
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
  const orderData = ORDERS.filter(
    item => item.id.toString() === query.orderId
  )[0];

  return { orderData };
};
export default OrderPage;

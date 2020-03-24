import React from "react";
import { NextPage } from "next";
import Error from "next/error";
import { OrderDb } from "../../../types";
import { getOrderById } from "../../../middleware";

const OrderPage: NextPage<{ data: OrderDb }> = ({ data }) => {
  if (data) {
    return (
      <div>
        <br />
        <br />
        <h2>
          Call <a href={`tel:${data.user.phone}`}>{data.user.phone}</a> to
          arrange your pickup and payment.
        </h2>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <h1>
          0 / {data.items.length} items fulfilled for {data.user.first}{" "}
          {data.user.last}
        </h1>
        <br />
        <br />
        <hr />
        {data.items.map(item => (
          <div key={item.name}>
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
  const data: OrderDb = await getOrderById(query.orderId.toString());
  return { data };
};
export default OrderPage;

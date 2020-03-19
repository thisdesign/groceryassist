import React from "react";
import { NextPage } from "next";
import { Order, USERS } from "../../constants";

const LineItem: NextPage<{ data: Order }> = ({ data }) => {
  const user = USERS.filter(user => user.id === data.userId)[0];

  return (
    <a href={`/orders/${data.id}`}>
      <h2>{user.name}</h2>
      <h3>{data.items.length} Items</h3>
      <hr />
    </a>
  );
};

export default LineItem;

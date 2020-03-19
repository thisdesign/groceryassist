import React from "react";
import { NextPage } from "next";
import { Order, USERS } from "../../constants";
import Link from "next/link";

const LineItem: NextPage<{ data: Order }> = ({ data }) => {
  const user = USERS.filter(user => user.id === data.userId)[0];

  return (
    <Link as={`/orders/${data.id}`} href={`/orders/[orderId]`}>
      <a>
        <h2>{user.name}</h2>
        <h3>{data.items.length} Items</h3>
        <hr />
      </a>
    </Link>
  );
};

export default LineItem;

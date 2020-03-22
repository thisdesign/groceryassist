import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { OrderDb } from "../../types";

const LineItem: NextPage<{ data: OrderDb }> = ({ data }) => {
  return (
    <Link as={`/orders/${data._id}`} href="/orders/[orderId]">
      <a>
        <h2>{data.name}</h2>
        <h3>{data.items.length} Items</h3>
        <hr />
      </a>
    </Link>
  );
};

export default LineItem;

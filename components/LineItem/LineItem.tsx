import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { OrderDb } from "../../types";

const LineItem: NextPage<{ data: OrderDb }> = ({ data }) => {
  const itemCount = data.items.length;
  const isPlural = data.items.length > 1;
  const { last, first } = data.user;

  return (
    <Link as={`/orders/${data._id}`} href="/orders/[orderId]">
      <a>
        <h2>
          {first} {last.charAt(0).toUpperCase()}
        </h2>
        <h3>
          {itemCount} {isPlural ? "Items" : "item"}
        </h3>
        <hr />
      </a>
    </Link>
  );
};

export default LineItem;

import React from "react"
import { NextPage } from "next"
import Link from "next/link"
import { OrderDb } from "../../types"
import S from "./LineItem.Styled"
import getTimeSince from "../../util/getTimeSince"

const LineItem: NextPage<{ data: OrderDb }> = ({ data }) => {
  const itemCount = data.items.length
  const isPlural = data.items.length > 1
  const { last, first } = data.user

  return (
    <Link as={`/orders/${data._id}`} href="/orders/[orderId]">
      <a>
        <S.LineItem>
          <div>
            <h2>
              {first} {last.charAt(0).toUpperCase()}.
            </h2>
            <h3>
              {itemCount} {isPlural ? "Items" : "item"} ·{" "}
              {getTimeSince(new Date(data.date))}
            </h3>
          </div>
          <div>
            <h3>4 mi</h3>
          </div>
        </S.LineItem>
      </a>
    </Link>
  )
}

export default LineItem

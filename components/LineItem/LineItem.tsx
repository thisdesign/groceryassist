import React from "react"
import { NextPage } from "next"
import Link from "next/link"
import { OrderDb } from "../../types"
import S from "./LineItem.Styled"
import getTimeSince from "../../util/getTimeSince"

const LineItem: NextPage<{
  data: OrderDb
  setHoveredId: React.Dispatch<React.SetStateAction<string>>
  isHovered: boolean
}> = ({ data, setHoveredId, isHovered }) => {
  const itemCount = data.items.length
  const isPlural = data.items.length > 1
  const { last, first } = data.user
  const { lat, lng } = data.location
  console.log(lat, lng)

  return (
    <Link as={`/orders/${data._id}`} href="/orders/[orderId]">
      <a>
        <S.LineItem
          onMouseOver={() => setHoveredId(data._id)}
          onFocus={() => setHoveredId(data._id)}
          onMouseOut={() => setHoveredId(null)}
          onBlur={() => setHoveredId(null)}
          isHovered={isHovered}
        >
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

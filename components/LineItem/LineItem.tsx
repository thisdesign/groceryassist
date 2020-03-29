import React from "react"
import { NextPage } from "next"
import Link from "next/link"
import { OrderDb, Coords } from "../../types"
import S from "./LineItem.Styled"
import getTimeSince from "../../util/getTimeSince"
import getDistBetweenCoords from "../../util/getDistBetweenCords"

const LineItem: NextPage<{
  data: OrderDb
  setHoveredId: React.Dispatch<React.SetStateAction<string>>
  isHovered: boolean
  distance: number
}> = ({ data, setHoveredId, isHovered, distance }) => {
  const {
    items,
    user: { last, first }
  } = data
  const itemCount = items.length
  const isPlural = itemCount > 1

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
              {distance} mi away · {itemCount} {isPlural ? "Items" : "item"}
            </h3>
          </div>
          <div>
            <h3>{getTimeSince(new Date(data.date))}</h3>
          </div>
        </S.LineItem>
      </a>
    </Link>
  )
}

export default LineItem

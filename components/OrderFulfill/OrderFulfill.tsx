/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from "react"
import { OrderDb } from "types"
import {
  UIWrapper,
  RadioCircle,
  BottomBar,
  LargeHeading,
  UIButton,
  AppFrame
} from "components"

import { completeOrder } from "middleware"
import Router from "next/router"
import S from "./OrderFulfill.Styled"

const OrderFulfill: React.FC<{ order: OrderDb }> = ({ order }) => {
  return <Fulfillment data={order} />
}

const Fulfillment: React.FC<{
  data: OrderDb
}> = ({ data }) => {
  const {
    items,
    user: { first }
  } = data

  const [checkItems, setCheckItems] = useState(
    items.map(item => ({ ...item, checked: false }))
  )

  const completeItemCount = checkItems.filter(item => item.checked).length

  const handleItem = (i: number) => {
    const newCheckItems = [...checkItems]
    newCheckItems[i].checked = !newCheckItems[i].checked
    setCheckItems(newCheckItems)
  }

  const handleCompleteBtn = () => {
    completeOrder(data._id)
      .then(() => {
        Router.push(`/orders/${data._id}/complete`)
      })
      .catch(err => console.error(err))
  }

  return (
    <>
      <AppFrame
        header={
          <>
            <LargeHeading>
              {items.length} items to fulfill for {first}
            </LargeHeading>
          </>
        }
      >
        {checkItems.map((item, i) => (
          <S.OrderItem
            isChecked={item.checked}
            key={item.text}
            onClick={() => handleItem(i)}
          >
            <RadioCircle checked={!!item.checked} />
            {item.text}
          </S.OrderItem>
        ))}
      </AppFrame>

      <BottomBar>
        <UIWrapper>
          <S.BottomBarGrid>
            <S.SmallWords>
              {completeItemCount} / {items.length} Complete
            </S.SmallWords>
            <UIButton onClick={handleCompleteBtn}>Mark as complete</UIButton>
          </S.BottomBarGrid>
        </UIWrapper>
      </BottomBar>
    </>
  )
}

export default OrderFulfill

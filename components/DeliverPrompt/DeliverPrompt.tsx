import React from "react"
import { OrderDb } from "types"
import { completeOrder } from "middleware"
import Router from "next/router"
import {
  UIWrapper,
  LargeHeading,
  UIButton,
  MediumHeading,
  LargeMessage,
} from "components"

const DeliverPrompt: React.FC<{ data: OrderDb }> = ({ data }) => {
  const handleCompleteBtn = () => {
    completeOrder(data._id)
      .then(() => {
        Router.push(`/orders/${data._id}/complete`)
      })
      .catch((err) => console.error(err))
  }

  const { city, state, address, zip } = data.location

  return (
    <LargeMessage>
      <UIWrapper>
        <MediumHeading>Deliver to {data.user.first}</MediumHeading>

        <LargeHeading>
          {address},<br />
          {city}, {state}, {zip}
        </LargeHeading>
        <UIButton textColor="brand" color="white" onClick={handleCompleteBtn}>
          Mark as complete
        </UIButton>
      </UIWrapper>
    </LargeMessage>
  )
}

export default DeliverPrompt

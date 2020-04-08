import React from "react"
import { OrderDb } from "types"
import { UIWrapper, LargeHeading, UIButton, LargeMessage } from "components"
import formatPhone from "util/formatPhone"
import Router from "next/router"

const OrderConnect: React.FC<{ data: OrderDb }> = ({ data }) => {
  const { phone, first } = data.user

  return (
    <LargeMessage>
      <UIWrapper pad>
        <LargeHeading>
          Call {first} at <a href={`tel:${phone}`}>{formatPhone(phone)}</a>
        </LargeHeading>
        <p>
          Continue once you&apos;ve arranged <br />
          pickup and payment with {first}
        </p>
        <br />
        <UIButton
          textColor="brand"
          color="white"
          onClick={() => Router.push(`/orders/${data._id}/fulfill`)}
        >
          Continue
        </UIButton>
      </UIWrapper>
    </LargeMessage>
  )
}

export default OrderConnect

import React, { useState } from "react"
import { OrderDb } from "types"
import { UIWrapper, MediumHeading, LargeHeading, UIButton } from "components"

import S from "./OrderFulfill.Styled"

const OrderFulfill: React.FC<{ order: OrderDb }> = ({ order }) => {
  const [isPromptOpen, setIsPromptOpen] = useState<boolean>(false)
  const closePrompt = () => setIsPromptOpen(false)
  const {
    user: { first, phone }
  } = order

  return (
    <>
      {isPromptOpen ? (
        <CallPrompt phone={phone} first={first} closePrompt={closePrompt} />
      ) : (
        <Fulfillment data={order} />
      )}
    </>
  )
}

const CallPrompt: React.FC<{
  phone: string
  first: string
  closePrompt: () => void
}> = ({ phone, first, closePrompt }) => {
  return (
    <S.PhonePrompt>
      <UIWrapper pad>
        <LargeHeading>
          Call {first} at <a href={`tel:${phone}`}>{phone}</a>
        </LargeHeading>
        <MediumHeading>
          Continue once you&apos;ve arranged <br />
          pickup and payment with {first}
        </MediumHeading>
        <br />
        <UIButton textColor="brand" color="white" onClick={closePrompt}>
          Continue
        </UIButton>
      </UIWrapper>
    </S.PhonePrompt>
  )
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

  const handleItem = (i: number) => {
    const newCheckItems = [...checkItems]
    newCheckItems[i].checked = !newCheckItems[i].checked
    setCheckItems(newCheckItems)
  }

  return (
    <UIWrapper pad>
      <LargeHeading>
        {items.length} items to fulfill for {first}
      </LargeHeading>
      {checkItems.map((item, i) => (
        <S.OrderItem
          isChecked={item.checked}
          key={item.name}
          onClick={() => handleItem(i)}
        >
          {item.name}
        </S.OrderItem>
      ))}
    </UIWrapper>
  )
}

export default OrderFulfill

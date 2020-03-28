/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react"
import { MediumHeading, UIButton, Paragraph, AppFrame } from "components"
import { Item } from "types"

import { PLACEHOLDER_ITEMS } from "../../constants"
import GroceryList from "./GroceryList/GroceryList"
import OrderInfo from "./OrderInfo/OrderInfo"

export type PageState = {
  first: string
  last: string
  address: string
  phone: string
  age: number
  additionalNotes: string | null
  items: Item[]
}

const NewOrder = () => {
  const [isGroceryPage, setIsGroceryPage] = useState(true)
  const [pageState, setPageState] = useState<PageState>({
    first: "",
    last: "",
    address: "",
    phone: "6168227256",
    age: 53,
    additionalNotes: null,
    items: []
  })

  const pushToState = (newItem: Partial<PageState>) => {
    setPageState({ ...pageState, ...newItem })
  }

  const handleCompleteButton = () => {
    setIsGroceryPage(false)
  }

  return (
    <>
      {isGroceryPage ? (
        <AppFrame
          bottomBar={<UIButton onClick={handleCompleteButton}>Next</UIButton>}
          header={
            <>
              <MediumHeading>New Order</MediumHeading>
              <Paragraph>Your information will be used to</Paragraph>
            </>
          }
        >
          <GroceryList
            pushToState={pushToState}
            items={pageState ? pageState.items : []}
          />
        </AppFrame>
      ) : (
        <AppFrame
          header={
            <>
              <MediumHeading>Order Details</MediumHeading>
              <Paragraph>Enter your location and phone number</Paragraph>
            </>
          }
        >
          <OrderInfo state={pageState} />
        </AppFrame>
      )}
    </>
  )
}

export default NewOrder

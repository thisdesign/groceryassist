/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react"
import { MediumHeading, UIButton, Paragraph, AppFrame } from "components"
import { Item } from "types"

import Router from "next/router"
import Cookie from "js-cookie"
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
    Cookie.set("_grocery_items", pageState)
    Router.push("/orders/new/capture")
  }

  return (
    <AppFrame
      bottomBar={
        pageState.items.length ? (
          <UIButton onClick={handleCompleteButton}>Next</UIButton>
        ) : null
      }
      header={
        <>
          <MediumHeading>New Order</MediumHeading>
          <Paragraph>Add items to your shopping list</Paragraph>
        </>
      }
    >
      <GroceryList
        pushToState={pushToState}
        items={pageState ? pageState.items : []}
      />
    </AppFrame>
  )
}

export default NewOrder

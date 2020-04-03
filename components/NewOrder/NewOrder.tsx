/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
import React, { useContext } from "react"
import { MediumHeading, UIButton, Paragraph, AppFrame } from "components"
import GroceryList from "./GroceryList"
import NewOrderProvider, { NewOrderCtx } from "./NewOrderProvider"

const NewOrder = () => {
  return (
    <NewOrderProvider>
      <UI />
    </NewOrderProvider>
  )
}

const UI = () => {
  return (
    <AppFrame
      header={
        <>
          <MediumHeading>New Order</MediumHeading>
          <Paragraph>Add items to your shopping list</Paragraph>
        </>
      }
    >
      <GroceryList />
    </AppFrame>
  )
}

export default NewOrder

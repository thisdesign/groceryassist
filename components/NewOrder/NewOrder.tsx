/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
import React from "react"
import { MediumHeading, Paragraph, AppFrame } from "components"
import GroceryList from "./GroceryList"
import NewOrderProvider from "./NewOrderProvider"

const NewOrder = () => {
  return (
    <NewOrderProvider>
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
    </NewOrderProvider>
  )
}

export default NewOrder

/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
import React, { useState, useContext, createContext } from "react"
import { MediumHeading, UIButton, Paragraph, AppFrame } from "components"
import { Item } from "types"
import GroceryList from "./GroceryList/GroceryList"
import NewOrderProvider, { NewOrderCtx } from "./NewOrderProvider"

const NewOrder = () => {
  return (
    <NewOrderProvider>
      <UI />
    </NewOrderProvider>
  )
}

const UI = () => {
  const { state, handleCompleteButton } = useContext(NewOrderCtx)

  return (
    <AppFrame
      bottomBar={
        state.items.length ? (
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
      <GroceryList />
    </AppFrame>
  )
}

export default NewOrder

/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react"
import {
  MediumHeading,
  UIWrapper,
  BottomBar,
  UIButton,
  Paragraph,
  AppFrame
} from "components"
import { Item } from "types"

import { PLACEHOLDER_ITEMS } from "../../constants"
import S from "./NewOrder.Styled"
import GroceryList from "./GroceryList/GroceryList"

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
  const [isGroceryPage, setIsGroceryPage] = useState(false)
  const [pageState, setPageState] = useState<PageState>({
    first: "",
    last: "",
    address: "",
    phone: "6168227256",
    age: 53,
    additionalNotes: null,
    items: PLACEHOLDER_ITEMS
  })

  const pushToState = (newItem: Partial<PageState>) => {
    setPageState({ ...pageState, ...newItem })
  }

  const handleCompleteButton = () => {
    console.log(pageState)
  }

  return (
    <>
      <AppFrame
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
      <BottomBar>
        <UIWrapper>
          <UIButton onClick={handleCompleteButton}>Next</UIButton>
        </UIWrapper>
      </BottomBar>
    </>
  )
}

export default NewOrder

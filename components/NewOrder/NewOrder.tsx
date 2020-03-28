/* eslint-disable react/no-array-index-key */
import React, { useState } from "react"
import {
  MediumHeading,
  UIWrapper,
  BottomBar,
  UIButton,
  Paragraph
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
      <UIWrapper pad>
        <MediumHeading>New Order</MediumHeading>
        <Paragraph>Your information will be used to</Paragraph>
      </UIWrapper>

      <S.Bg>
        <UIWrapper pad>
          <GroceryList
            pushToState={pushToState}
            items={pageState ? pageState.items : []}
          />
        </UIWrapper>
      </S.Bg>

      <BottomBar>
        <UIWrapper>
          <UIButton onClick={handleCompleteButton}>Next</UIButton>
        </UIWrapper>
      </BottomBar>
    </>
  )
}

export default NewOrder

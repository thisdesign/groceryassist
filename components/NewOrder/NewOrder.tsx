/* eslint-disable react/no-array-index-key */
import React, { useState, useRef } from "react"
import UIWrapper from "components/UIWrapper/UIWrapper"
import {
  LargeHeading,
  MediumHeading,
  BottomBar,
  UIButton,
  TextInput,
  AddressInput,
  Paragraph,
  TextArea
} from "components"
import { Item } from "types"
import GroceryLineItem from "components/GroceryLineItem/GroceryLineItem"
import { PLACEHOLDER_ITEMS } from "../../constants"
import S from "./NewOrder.Styled"
import useItemAdd from "./useItemAdd"

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

type ListProps = {
  items: Item[]
  pushToState: (newItem: Partial<PageState>) => void
}

const GroceryList: React.FC<ListProps> = ({ pushToState, items }) => {
  const { newItemFieldRef, moreDetailsFieldRef, handleNewItem } = useItemAdd(
    items,
    pushToState
  )

  return (
    <S.GroceryWrap>
      <S.White>
        <S.Pad>
          {items.map((item, i) => (
            <GroceryLineItem
              key={`${item.text}${i}`}
              text={item.text}
              notes={item.notes}
            />
          ))}
        </S.Pad>
        <S.NewItemInputWrapper>
          <div>
            <TextInput placeholder="1 carton of eggs" ref={newItemFieldRef} />
            <TextArea
              style={{ display: "none" }}
              ref={moreDetailsFieldRef}
              placeholder="Additional details"
            />
          </div>

          <div>
            <UIButton inverted textColor="brand" onClick={handleNewItem}>
              Add Item
            </UIButton>
            <span>add details</span>
          </div>
        </S.NewItemInputWrapper>
      </S.White>
    </S.GroceryWrap>
  )
}

export default NewOrder

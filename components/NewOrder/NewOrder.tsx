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

const PLACEHOLDER_ITEMS: Item[] = [
  {
    text: "2 organic fuji apples"
  },
  {
    text: "4 bananas"
  },
  {
    text: "2 avocados",
    notes: "Prefer if they are a little soft"
  },
  {
    text: "2 avocados"
  },
  {
    text: "2 sweet potatoes"
  },
  {
    text: "2 sweet onion"
  },
  {
    text: "1 bag organic spinich"
  },
  {
    text: "1 carton eggs"
  },
  {
    text: "stick butter",
    notes: "I prefer kerrygold"
  },
  {
    text: "1 lb organic salted almonds"
  }
]

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
    <div>
      <UIWrapper pad>
        <LargeHeading>New Order</LargeHeading>
      </UIWrapper>
      <UIWrapper>
        <S.Grid>
          <GroceryList
            pushToState={pushToState}
            items={pageState ? pageState.items : []}
          />
          <InfoInput />
        </S.Grid>
      </UIWrapper>
      <BottomBar>
        <UIWrapper>
          <UIButton onClick={handleCompleteButton}>Place order</UIButton>
        </UIWrapper>
      </BottomBar>
    </div>
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
    <div>
      {items.map((item, i) => (
        <GroceryLineItem
          key={`${item.text}${i}`}
          text={item.text}
          notes={item.notes}
        />
      ))}

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
          <div>add details</div>
        </div>
      </S.NewItemInputWrapper>
    </div>
  )
}

const InfoInput = () => {
  return (
    <div>
      <MediumHeading>Where can we find you?</MediumHeading>
      <Paragraph>
        Your information will be used to <br />
        lorem ipsum dolor sit amet
      </Paragraph>
      <S.FormWrapper>
        <AddressInput onSubmit={address => console.log(address)} />
        <TextInput placeholder="First" />
        <TextInput placeholder="Last" />
        <TextInput placeholder="Phone" />
        <TextInput placeholder="Age" />
        <TextArea placeholder="Additional notes" rows={5} />
      </S.FormWrapper>
    </div>
  )
}
export default NewOrder

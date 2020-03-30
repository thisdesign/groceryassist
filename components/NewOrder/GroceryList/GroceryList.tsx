/* eslint-disable react/no-array-index-key */
import React, { useState, useRef } from "react"

import { UIButton, TextInput, TextArea, Paragraph, UIWrapper } from "components"
import { Item } from "types"
import S from "./GroceryList.Styled"
import useItemAdd from "./useItemAdd"
import { PageState } from "../NewOrder"

type ListProps = {
  items: Item[]
  pushToState: (newItem: Partial<PageState>) => void
}

const GroceryList: React.FC<ListProps> = ({ pushToState, items }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const {
    newItemFieldRef,
    moreDetailsFieldRef,
    removeItem,
    handleNewItem
  } = useItemAdd(items, pushToState)

  return (
    <S.GroceryWrap>
      {items.map((item, i) => (
        <GroceryLineItem
          key={`${item.text}${i}`}
          text={item.text}
          notes={item.notes}
          id={item.id}
          removeItem={removeItem}
        />
      ))}
      <S.NewItemInputWrapper isFocused={isFocused}>
        <S.NewItemGrid>
          <div>
            <S.Input
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Add item..."
              ref={newItemFieldRef}
            />
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
        </S.NewItemGrid>
      </S.NewItemInputWrapper>
      {!items.length && (
        <S.Emptystate>
          <Paragraph>No items yet</Paragraph>
          <div>+ Add item&nbsp;</div>
        </S.Emptystate>
      )}
    </S.GroceryWrap>
  )
}

const GroceryLineItem: React.FC<{
  removeItem: (id: string) => void
} & Item> = ({ removeItem, text, notes, id }) => {
  return (
    <S.ItemWrapper>
      <UIWrapper>
        <h3>{text}</h3>
        {notes && <h4>&quot;{notes}&quot;</h4>}
      </UIWrapper>
    </S.ItemWrapper>
  )
}

export default GroceryList

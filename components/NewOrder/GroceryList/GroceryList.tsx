/* eslint-disable react/no-array-index-key */
import React, { useState, useRef } from "react"

import { UIButton, TextInput, TextArea } from "components"
import { Item } from "types"
import GroceryLineItem from "components/GroceryLineItem/GroceryLineItem"
import S from "./GroceryList.Styled"
import useItemAdd from "./useItemAdd"
import { PageState } from "../NewOrder"

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

export default GroceryList

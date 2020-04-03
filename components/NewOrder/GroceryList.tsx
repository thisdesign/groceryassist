/* eslint-disable react/no-array-index-key */
import React, { useState, useContext } from "react"
import { UIButton, TextArea, Paragraph, UIWrapper } from "components"
import { Item } from "types"
import S from "./GroceryList.Styled"
import useItemAdd from "./useItemAdd"
import { NewOrderCtx } from "./NewOrderProvider"

const GroceryList: React.FC = () => {
  const { state } = useContext(NewOrderCtx)
  const { removeItem, isFocused, GroceryListCtx } = useItemAdd()

  return (
    <GroceryListCtx.Provider value={{ isFocused }}>
      {isFocused || state.items.length ? (
        <>
          {state.items.map((item, i) => (
            <GroceryLineItem
              key={`${item.text}${i}`}
              text={item.text}
              notes={item.notes}
              id={item.id}
              removeItem={removeItem}
            />
          ))}
          <NewItemInput />
          <NextButton />
        </>
      ) : (
        <EmptyState />
      )}
    </GroceryListCtx.Provider>
  )
}

const EmptyState = () => {
  const { setIsFocused } = useItemAdd()

  return (
    <S.Emptystate>
      <Paragraph>No items yet</Paragraph>
      <div onClick={() => setIsFocused(true)}>+ Add item&nbsp;</div>
    </S.Emptystate>
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

const NewItemInput = () => {
  const {
    newItemFieldRef,
    moreDetailsFieldRef,
    handleNewItem,
    isFocused,
    setIsFocused
  } = useItemAdd()

  return (
    <S.NewItemInputWrapper isFocused={isFocused}>
      <S.NewItemGrid>
        <div>
          <S.Input
            onFocus={() => setIsFocused(true)}
            placeholder="Add item..."
            ref={newItemFieldRef}
          />
          <TextArea
            style={{ display: "none" }}
            ref={moreDetailsFieldRef}
            placeholder="Additional details"
          />
        </div>

        <S.ButtonsWrapper>
          <UIButton inverted textColor="brand" onClick={handleNewItem}>
            Add
          </UIButton>
          <span>Add notes</span>
        </S.ButtonsWrapper>
      </S.NewItemGrid>
    </S.NewItemInputWrapper>
  )
}

const NextButton = () => {
  const { state } = useContext(NewOrderCtx)

  return (
    <>
      {state.items.length ? (
        <UIWrapper>
          <Paragraph>
            Once you are finished, add your info
            <br /> so we can deliver to you.
          </Paragraph>
          <UIButton onClick={() => null}>Next</UIButton>
        </UIWrapper>
      ) : null}
    </>
  )
}

export default GroceryList

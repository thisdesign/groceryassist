/* eslint-disable react/no-array-index-key */
import React, { createContext, useState, useContext } from "react"
import { UIButton, TextArea, Paragraph, UIWrapper } from "components"
import { Item } from "types"
import S from "./GroceryList.Styled"
import useItemAdd from "./useItemAdd"
import { NewOrderCtx } from "./NewOrderProvider"

export const GroceryListCtx = createContext<{
  isFocused: boolean
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
}>({
  isFocused: false,
  setIsFocused: () => null
})

const GroceryList: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <GroceryListCtx.Provider value={{ isFocused, setIsFocused }}>
      <ListUI />
    </GroceryListCtx.Provider>
  )
}

const ListUI = () => {
  const { state } = useContext(NewOrderCtx)
  const { removeItem, isFocused } = useItemAdd()

  return (
    <>
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
    </>
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
    isFocused,
    setIsFocused,
    handleNewItem
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
    <S.NextWrapper isEnabled={!!state.items.length} pad>
      <Paragraph>
        Once you are finished, add your info
        <br /> so we can deliver to you.
      </Paragraph>
      <UIButton onClick={() => null}>Next</UIButton>
    </S.NextWrapper>
  )
}

export default GroceryList

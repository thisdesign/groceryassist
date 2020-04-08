/* eslint-disable react/no-array-index-key */
import React, {
  useRef,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react"
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
  setIsFocused: () => null,
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
            <GroceryLineItem data={item} key={item.id} />
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

const NewItemInput = () => {
  const {
    newItemFieldRef,
    moreDetailsFieldRef,
    isFocused,
    setIsFocused,
    handleNewItem,
  } = useItemAdd()

  const [isDetailsEnabled, setDetailsEnabled] = useState<boolean>(false)

  return (
    <S.NewItem.Wrapper isFocused={isFocused}>
      <S.NewItem.Grid>
        <div>
          <S.AddItemInput
            onFocus={() => setIsFocused(true)}
            placeholder="Add item..."
            ref={newItemFieldRef}
          />
          <S.NewItem.TextArea
            isEnabled={isDetailsEnabled}
            ref={moreDetailsFieldRef}
            placeholder="Additional details"
          />
        </div>

        <S.NewItem.ButtonWrap>
          <UIButton inverted textColor="brand" onClick={handleNewItem}>
            Add
          </UIButton>
          <span onClick={() => setDetailsEnabled(true)}>Add notes</span>
        </S.NewItem.ButtonWrap>
      </S.NewItem.Grid>
    </S.NewItem.Wrapper>
  )
}

const GroceryLineItem: React.FC<{ data: Item }> = ({ data }) => {
  const { removeItem, updateItem } = useItemAdd()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleRemove = () => removeItem(data.id)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    updateItem(data.id, val)
  }

  const blurOnEnter = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.keyCode === 13) {
      e.currentTarget.blur()
    }
  }

  return (
    <S.LineItem.Wrapper>
      <S.LineItem.Inner>
        <div>
          <input
            value={data.text}
            onKeyDown={blurOnEnter}
            onChange={handleChange}
            ref={inputRef}
          />
          {data.notes && <h4>{data.notes}</h4>}
        </div>
        <div>
          <h5>
            <span onClick={handleRemove}>Remove</span>
          </h5>
        </div>
      </S.LineItem.Inner>
    </S.LineItem.Wrapper>
  )
}

const NextButton = () => {
  const { state, handleCompleteButton } = useContext(NewOrderCtx)

  return (
    <S.NextWrapper isEnabled={!!state.items.length} pad>
      <Paragraph>
        Once your shopping list is complete,
        <br />
        information for the delivery
      </Paragraph>
      <UIButton onClick={handleCompleteButton}>Next</UIButton>
    </S.NextWrapper>
  )
}

export default GroceryList

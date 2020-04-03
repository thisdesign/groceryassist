/* eslint-disable react/no-array-index-key */
import React, {
  useRef,
  createContext,
  useState,
  useContext,
  useEffect
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
            <GroceryLineItem data={item} key={`${item.text}${i}`} />
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
    handleNewItem
  } = useItemAdd()

  return (
    <S.NewItemInputWrapper isFocused={isFocused}>
      <S.NewItemGrid>
        <div>
          <S.AddItemInput
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

const GroceryLineItem: React.FC<{ data: Item }> = ({ data }) => {
  const { removeItem, updateItem } = useItemAdd()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleRemove = () => removeItem(data.id)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    console.log(e.target)

    updateItem(data.id, val)
  }

  return (
    <S.LineItem.Wrapper>
      <S.LineItem.Inner>
        <div>
          <input value={data.text} onChange={handleChange} ref={inputRef} />
          {data.notes && <h4>&quot;{data.notes}&quot;</h4>}
        </div>
        <div>
          <h5>
            <span>Edit</span> • <span onClick={handleRemove}>remove</span>
          </h5>
        </div>
      </S.LineItem.Inner>
    </S.LineItem.Wrapper>
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

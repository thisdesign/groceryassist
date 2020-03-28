import React from "react"
import { Item } from "types"
import S from "./GroceryLineItem.Styled"

type GroceryItemProps = Item
const GroceryLineItem: React.FC<GroceryItemProps> = ({ text, notes }) => {
  return (
    <S.ItemWrapper>
      <h3>{text}</h3>
      {notes && <h4>&quot;{notes}&quot;</h4>}
      <h5>Edit · Remove</h5>
    </S.ItemWrapper>
  )
}

export default GroceryLineItem

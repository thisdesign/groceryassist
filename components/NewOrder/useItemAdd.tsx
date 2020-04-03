import { useRef, useEffect, useContext, useState } from "react"
import { v4 as uuid } from "uuid"
import { NewOrderCtx } from "./NewOrderProvider"

const useItemAdd = () => {
  const { state, pushToState } = useContext(NewOrderCtx)
  const newItemFieldRef = useRef<HTMLInputElement>()
  const moreDetailsFieldRef = useRef<HTMLTextAreaElement>()
  const [isFocused, setIsFocused] = useState<boolean>(false)

  /**
   * New Item
   */

  const handleNewItem = () => {
    const $itemName = newItemFieldRef.current
    const $itemNotes = moreDetailsFieldRef.current

    if ($itemName && $itemNotes && $itemName.value !== "") {
      const newItem = {
        id: uuid(),
        text: $itemName.value,
        notes: $itemNotes.value !== "" ? $itemNotes.value : null
      }

      pushToState({ items: [...state.items, newItem] })

      $itemName.value = ""
      $itemNotes.value = ""
      $itemName.focus()
    }
  }

  /**
   * Remove item
   */

  const removeItem = (id: string) => {
    const itemsWithRemoved = state.items.filter(item => item.id !== id)
  }

  /**
   * handle "enter" keydown
   */

  useEffect(() => {
    const $itemName = newItemFieldRef.current

    if ($itemName) {
      const listenForEnter = (e: KeyboardEvent) => {
        if (e.keyCode === 13) {
          handleNewItem()
        }
      }

      $itemName.addEventListener("keydown", listenForEnter)

      return () => {
        $itemName.removeEventListener("keydown", listenForEnter)
      }
    }

    return () => null
  }, [isFocused, newItemFieldRef, state.items])

  /**
   * Focus on isFocused
   */

  useEffect(() => {
    if (isFocused && newItemFieldRef.current) {
      newItemFieldRef.current.focus()
    }
  }, [isFocused])

  return {
    newItemFieldRef,
    moreDetailsFieldRef,
    handleNewItem,
    removeItem,
    isFocused,
    setIsFocused
  }
}

export default useItemAdd

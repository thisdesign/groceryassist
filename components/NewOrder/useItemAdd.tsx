import { useState, useRef, useEffect } from "react"
import { Item } from "types"
import { PageState } from "./NewOrder"

const useItemAdd = (
  items,
  pushToState: (newItem: Partial<PageState>) => void
) => {
  const newItemFieldRef = useRef<HTMLInputElement>()
  const moreDetailsFieldRef = useRef<HTMLTextAreaElement>()

  const handleNewItem = () => {
    const $itemName = newItemFieldRef.current
    const $itemNotes = moreDetailsFieldRef.current

    if ($itemName && $itemNotes && $itemName.value !== "") {
      const newItem = {
        name: $itemName.value,
        notes: $itemNotes.value !== "" ? $itemNotes.value : null
      }

      pushToState({ items: [...items, newItem] })

      $itemName.value = ""
      $itemNotes.value = ""
      $itemName.focus()
    }
  }

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
  }, [newItemFieldRef, items])

  return {
    newItemFieldRef,
    moreDetailsFieldRef,
    handleNewItem
  }
}

export default useItemAdd

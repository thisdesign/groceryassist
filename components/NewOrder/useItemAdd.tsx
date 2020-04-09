import { useRef, useEffect, useContext, createContext, useState } from "react"
import { v4 as uuid } from "uuid"
import { NewOrderCtx } from "./NewOrderProvider"
import { GroceryListCtx } from "./GroceryList"

const useItemAdd = () => {
  const { setIsFocused, isFocused } = useContext(GroceryListCtx)

  const { state, pushToState } = useContext(NewOrderCtx)
  const newItemFieldRef = useRef<HTMLInputElement>()
  const moreDetailsFieldRef = useRef<HTMLTextAreaElement>()

  /**
   * Scroll to bottom
   */

  const scrollToBottom = () => {
    window.scrollTo(0, document.querySelector("body").scrollHeight)
  }

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
        notes: $itemNotes.value !== "" ? $itemNotes.value : null,
      }

      pushToState({ items: [...state.items, newItem] })

      $itemName.value = ""
      $itemNotes.value = ""
      $itemName.focus()
      scrollToBottom()
    }
  }

  /**
   * Remove item
   */

  const removeItem = (id: string) => {
    const itemsWithRemoved = state.items.filter((item) => item.id !== id)
    pushToState({ items: itemsWithRemoved })
  }

  /**
   * updateItem
   */

  const updateItem = (id: string, text: string) => {
    const updatedItems = state.items.map((item) =>
      item.id === id ? { ...item, text } : item
    )
    pushToState({ items: updatedItems })
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
    setIsFocused,
    isFocused,
    updateItem,
  }
}

export default useItemAdd

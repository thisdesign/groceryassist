import { useRef, useEffect } from "react"
import { v4 as uuid } from "uuid"
import { PageState } from "../NewOrder"

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
        id: uuid(),
        text: $itemName.value,
        notes: $itemNotes.value !== "" ? $itemNotes.value : null
      }

      pushToState({ items: [...items, newItem] })

      $itemName.value = ""
      $itemNotes.value = ""
      $itemName.focus()
    }
  }

  const removeItem = (id: string) => {
    const itemsWithRemoved = items.filter(item => item.id !== id)
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

    return null
  }, [newItemFieldRef, items])

  return {
    newItemFieldRef,
    moreDetailsFieldRef,
    handleNewItem,
    removeItem
  }
}

export default useItemAdd

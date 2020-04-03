/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
import React, { useState, createContext, useEffect } from "react"
import { Item } from "types"
import Cookie from "js-cookie"
import Router from "next/router"
import { PLACEHOLDER_ITEMS } from "../../constants"

export type PageState = {
  first: string
  last: string
  address: string
  phone: string
  age: number
  additionalNotes: string | null
  items: Item[]
}
type Ctx = {
  state: PageState
  handleCompleteButton: () => void
  pushToState: (newItem: Partial<PageState>) => void
}

const INITIAL_STATE = {
  first: "",
  last: "",
  address: "",
  phone: "",
  age: 0,
  additionalNotes: null,
  items: PLACEHOLDER_ITEMS
}

export const NewOrderCtx = createContext<Ctx>({
  state: INITIAL_STATE,
  handleCompleteButton: () => null,
  pushToState: () => null
})

const NewOrderProvider: React.FC = ({ children }) => {
  const [pageState, setPageState] = useState<PageState>(INITIAL_STATE)

  const pushToState = (newItem: Partial<PageState>) => {
    setPageState({ ...pageState, ...newItem })
  }

  const handleCompleteButton = () => {
    Cookie.set("_grocery_items", pageState)
    Router.push("/orders/new/capture")
  }

  useEffect(() => {
    Cookie.set("_grocery_items_live", pageState)
  }, [pageState])

  return (
    <NewOrderCtx.Provider
      value={{
        pushToState,
        handleCompleteButton,
        state: pageState
      }}
    >
      {children}
    </NewOrderCtx.Provider>
  )
}

export default NewOrderProvider

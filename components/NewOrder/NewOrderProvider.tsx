/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
import React, { useState, createContext, useEffect } from "react"
import { NewOrderState } from "types"
import Cookie from "js-cookie"
import Router from "next/router"
// import { PLACEHOLDER_ITEMS } from "../../constants"

type Ctx = {
  state: NewOrderState
  handleCompleteButton: () => void
  pushToState: (newItem: Partial<NewOrderState>) => void
}

const INITIAL_STATE = {
  first: "",
  last: "",
  address: "",
  phone: "",
  age: 0,
  additionalNotes: null,
  items: [],
}

export const NewOrderCtx = createContext<Ctx>({
  state: INITIAL_STATE,
  handleCompleteButton: () => null,
  pushToState: () => null,
})

const NewOrderProvider: React.FC = ({ children }) => {
  const [pageState, setPageState] = useState<NewOrderState>(INITIAL_STATE)

  const pushToState = (newItem: Partial<NewOrderState>) => {
    setPageState({ ...pageState, ...newItem })
  }

  const handleCompleteButton = () => {
    Cookie.set("_grocery_items", pageState)
    Router.push("/orders/new/capture").then(() => window.scrollTo(0, 0))
  }

  return (
    <NewOrderCtx.Provider
      value={{
        pushToState,
        handleCompleteButton,
        state: pageState,
      }}
    >
      {children}
    </NewOrderCtx.Provider>
  )
}

export default NewOrderProvider

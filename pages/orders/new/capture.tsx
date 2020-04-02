import React, { useEffect, useState } from "react"
import { NextPage } from "next"
import { Item } from "types"
import Router from "next/router"

const Capture: NextPage<{ items: Item[] }> = ({ items }) => {
  const [windowItems, setWindowItems] = useState<Item[]>(items || null)

  useEffect(() => {
    if (window.__GROCERY_ITEMS__) {
      setWindowItems(window.__GROCERY_ITEMS__)
    } else {
      Router.push("/orders/new")
    }
  }, [])

  return (
    <div>{windowItems ? <div>items found</div> : <div>loading...</div>}</div>
  )
}

Capture.getInitialProps = async () => {
  let items = null

  if (typeof window !== "undefined") {
    items = window.__GROCERY_ITEMS__
  }

  return { items }
}

export default Capture

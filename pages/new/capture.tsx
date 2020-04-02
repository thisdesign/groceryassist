import React from "react"
import { NextPage } from "next"
import { Item } from "types"

const Capture: NextPage<{ items: Item[] }> = ({ items }) => {
  console.log(items)

  return <div>capture</div>
}

Capture.getInitialProps = async () => {
  let items = null

  if (typeof window !== "undefined") {
    items = window.__GROCERY_ITEMS__
  }

  return { items }
}

export default Capture

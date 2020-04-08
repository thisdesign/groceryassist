import React from "react"
import { NextPage } from "next"
import { NewOrderState } from "types"
import { OrderInfoCapture, Page } from "components"
import cookie from "cookie"

const Capture: NextPage<{ data: NewOrderState }> = ({ data }) => {
  return (
    <Page title="Order Details">
      <OrderInfoCapture data={data} />
    </Page>
  )
}

Capture.getInitialProps = async ({ req }) => {
  const cookies = cookie.parse(req ? req.headers.cookie : document.cookie)
  const data = JSON.parse(cookies._grocery_items)

  return { data }
}

export default Capture

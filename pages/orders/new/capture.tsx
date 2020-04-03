import React, { useEffect, useState } from "react"
import { NextPage } from "next"
import { Item } from "types"
import { OrderInfoCapture } from "components"
import Router from "next/router"
import cookie from "cookie"

const Capture: NextPage<{ data: any }> = ({ data }) => {
  return <OrderInfoCapture />
}

Capture.getInitialProps = async ({ req }) => {
  const cookies = cookie.parse(req ? req.headers.cookie : document.cookie)
  const data = JSON.parse(cookies._grocery_items)

  return { data }
}

export default Capture

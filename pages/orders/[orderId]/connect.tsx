import React from "react"
import { NextPage } from "next"
import { getOrderById } from "middleware"
import { OrderDb } from "types"
import { OrderConnect } from "components"

const ConnectPage: NextPage<{ data: OrderDb }> = ({ data }) => {
  return <OrderConnect data={data} />
}

ConnectPage.getInitialProps = async ({ query }) => {
  const data: OrderDb = await getOrderById(query.orderId.toString())
  return { data }
}

export default ConnectPage

import React from "react"
import { NextPage } from "next"
import Error from "next/error"
import { UIWrapper, OrderFulfill } from "components"
import { OrderDb } from "types"
import { getOrderById } from "middleware"

const OrderPage: NextPage<{ data: OrderDb }> = ({ data }) => {
  if (data) {
    return <OrderFulfill order={data} />
  }
  return <Error statusCode={404} />
}

OrderPage.getInitialProps = async ({ query }) => {
  const data: OrderDb = await getOrderById(query.orderId.toString())
  return { data }
}
export default OrderPage

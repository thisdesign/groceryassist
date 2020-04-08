import React from "react"
import { NextPage } from "next"
import Error from "next/error"

import { OrderDetail, Page } from "components"
import { OrderDb } from "types"
import { getOrderById } from "middleware"

const OrderPage: NextPage<{ data: OrderDb }> = ({ data }) => {
  if (data) {
    return (
      <Page title={`Order for ${data.user.first}`}>
        <OrderDetail data={data} />
      </Page>
    )
  }
  return <Error statusCode={404} />
}

OrderPage.getInitialProps = async ({ query }) => {
  const orderId = query.orderId.toString()
  const data: OrderDb = await getOrderById(orderId)
  return { data }
}
export default OrderPage

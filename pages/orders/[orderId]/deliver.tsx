import React from "react"
import { NextPage } from "next"
import { getOrderById, completeOrder } from "middleware"
import { OrderDb } from "types"
import Router from "next/router"
import { DeliverPrompt, Page } from "components"

const ConnectPage: NextPage<{ data: OrderDb }> = ({ data }) => {
  return (
    <Page title={`Order for ${data.user.first}`}>
      <DeliverPrompt data={data} />
    </Page>
  )
}

ConnectPage.getInitialProps = async ({ query }) => {
  const data: OrderDb = await getOrderById(query.orderId.toString())
  return { data }
}

export default ConnectPage

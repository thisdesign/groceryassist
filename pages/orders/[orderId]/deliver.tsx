import React from "react"
import { NextPage } from "next"
import { getOrderById, completeOrder } from "middleware"
import { OrderDb } from "types"
import Router from "next/router"
import { DeliverPrompt, Page } from "components"

const ConnectPage: NextPage<{ data: OrderDb }> = ({ data }) => {
  const handleCompleteBtn = () => {
    completeOrder(data._id)
      .then(() => {
        Router.push(`/orders/${data._id}/complete`)
      })
      .catch((err) => console.error(err))
  }

  const { city, state, address, zip } = data.location

  return (
    <Page title={`Order for ${data.user.first}`}>
      <DeliverPrompt data= />
    </Page>
  )
}

ConnectPage.getInitialProps = async ({ query }) => {
  const data: OrderDb = await getOrderById(query.orderId.toString())
  return { data }
}

export default ConnectPage

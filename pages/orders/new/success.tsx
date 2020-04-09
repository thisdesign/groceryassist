import React from "react"
import { NextPage } from "next"
import { CreateSuccess, Page } from "components"

const Success: NextPage = () => {
  return (
    <Page title="Order Created">
      <CreateSuccess />
    </Page>
  )
}

export default Success

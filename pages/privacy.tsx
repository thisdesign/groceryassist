import React from "react"
import { NextPage } from "next"
import { Privacy as PrivacyComponent, Page } from "components"

const Privacy: NextPage = () => {
  return (
    <Page title="Privacy">
      <PrivacyComponent />
    </Page>
  )
}

export default Privacy

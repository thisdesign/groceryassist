import React, { useState } from "react"
// import { createUser } from "../../middleware"
import { TwoPanel } from ".."

const IMAGES = [
  "https://images.unsplash.com/photo-1583247949334-e07ab70681c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=780&q=60"
]

const VolunteerOnboard = () => {
  const user = {
    first: "",
    last: "",
    phone: 6168227256,
    address: "4231 n albina ave portland or"
  }

  return (
    <TwoPanel image={IMAGES[0]}>
      What cha numba?<pre>{JSON.stringify(user, null, 2)}</pre>
    </TwoPanel>
  )
}

export default VolunteerOnboard

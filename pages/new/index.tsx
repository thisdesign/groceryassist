import React, { useState } from "react"
// import { useForm } from "react-hook-form"
// import Router from "next/router"
import { GetServerSideProps, NextPage } from "next"
import { Item, LocationRes } from "../../types"
import { getLocationByAddress } from "../../middleware"
import { PhoneCapture } from "../../components"

const App: NextPage<{ location: LocationRes }> = ({ location }) => {
  const [items, setItems] = useState<Item[]>([])

  return <PhoneCapture />
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (query.a) {
    const address = query.a.toString()
    const location = await getLocationByAddress(address)
    return { props: { location } }
  }
  return { props: {} }
}

export default App

import { NextPage, GetServerSideProps } from "next"
import Router from "next/router"
import { OrderList, PhoneCapture, AddressCapture } from "../../components"
import { OrderRes, LocationRes } from "../../types"
import "isomorphic-unfetch"
import { getOrders, getLocationByAddress } from "../../middleware"
import formatLocation from "../../util/formatLocation"
import spaceToPlus from "../../util/spaceToPlus"

const Listings: NextPage<{
  data: OrderRes
  location: LocationRes
  phone: string | null
}> = ({ data, location, phone }) => {
  if (location && phone && typeof window !== "undefined") {
    Router.push(`/orders?a=${spaceToPlus(formatLocation(location))}`)
  }

  if (location) {
    return <OrderList orders={data} location={location} />
  }

  if (phone) {
    return (
      <AddressCapture
        onSubmit={address => {
          console.log(address)
        }}
      />
    )
  }

  return <PhoneCapture onNext={num => Router.push(`/orders?p=${num}`)} />
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query
}) => {
  const data = await getOrders()

  let location = null
  let address = null
  let phone = null

  if (query.p) {
    phone = query.p.toString()
  }

  if (query.a) {
    address = query.a.toString()
  }

  if (phone === "6168227256") {
    address = "10434 n wygant st"
  }

  if (address) {
    location = await getLocationByAddress(address)
  }

  return {
    props: {
      data,
      location,
      phone
    }
  }
}

export default Listings

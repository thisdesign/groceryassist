import { NextPage, GetServerSideProps } from "next"
import Router from "next/router"
import { OrderList, PhoneCapture, AddressCapture } from "../../components"
import { OrderRes, LocationRes } from "../../types"
import "isomorphic-unfetch"
import { getOrders, getLocationByAddress } from "../../middleware"
import formatLocation from "../../util/formatLocation"
import spaceToPlus from "../../util/spaceToPlus"

const goToOrdersPage = (address: string) =>
  Router.push(`/orders?a=${spaceToPlus(address)}`)

const Listings: NextPage<{
  orders: OrderRes
  location: LocationRes
}> = ({ orders, location }) => {
  if (location) {
    return <OrderList orders={orders} location={location} />
  }

  return <AddressCapture onSubmit={address => goToOrdersPage(address)} />
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query
}) => {
  let orders = null
  let location: LocationRes = null

  if (query.a) {
    const address = query.a.toString()
    location = await getLocationByAddress(address)

    orders = await getOrders({
      limit: 4,
      coords: [location.lat, location.lng]
    })
  }

  return {
    props: {
      orders,
      location
    }
  }
}

export default Listings

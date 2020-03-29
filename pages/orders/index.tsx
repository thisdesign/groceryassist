import { NextPage, GetServerSideProps } from "next"
import Cookies from "js-cookie"
import cookie from "cookie"
import Router from "next/router"
import { OrderList, PhoneCapture, AddressCapture } from "../../components"
import { OrderRes, LocationRes } from "../../types"
import "isomorphic-unfetch"
import { getOrders, getLocationByAddress } from "../../middleware"
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

  return (
    <AddressCapture
      onSubmit={address => {
        Cookies.set("_address", address)
        goToOrdersPage(address)
      }}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
  req,
  query
}) => {
  let orders = null
  let location: LocationRes = null

  const { _address: addressCookie } = cookie.parse(req.headers.cookie)

  if (query.a || addressCookie) {
    const address = query.a ? query.a.toString() : addressCookie
    location = await getLocationByAddress(address)

    orders = await getOrders({
      limit: 0,
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

import { NextPage, GetServerSideProps } from "next"
import Cookies from "js-cookie"
import cookie from "cookie"
import Router from "next/router"
import { OrderList, AddressCapture, Page } from "../../components"
import { OrderRes, LocationRes } from "../../types"
import "isomorphic-unfetch"
import { getOrders, getLocationByAddress } from "../../middleware"
import spaceToPlus from "../../util/spaceToPlus"
import { RANGES } from "../../constants"

const goToOrdersPage = (address: string) =>
  Router.push(`/orders?a=${spaceToPlus(address)}`)

const Listings: NextPage<{
  orders: OrderRes
  location: LocationRes
  range: number
}> = ({ orders, location, range }) => {
  if (location) {
    return (
      <Page title="Orders">
        <OrderList orders={orders} location={location} range={range} />
      </Page>
    )
  }

  return (
    <Page title="Enter Address">
      <AddressCapture
        onSubmit={(address) => {
          Cookies.set("_address", address)
          goToOrdersPage(address)
        }}
      />
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  let range: number = RANGES[0]
  let orders = null
  let location: LocationRes = null
  let addressCookie = null

  if (req.headers.cookie) {
    addressCookie = cookie.parse(req.headers.cookie)._address
  }

  if (query.range) {
    range = parseFloat(query.range.toString())
  }

  if (query.a || addressCookie) {
    const address = query.a ? query.a.toString() : addressCookie
    location = await getLocationByAddress(address)

    orders = await getOrders({
      limit: 0,
      coords: [location.lat, location.lng],
      radius: range,
    })
  }

  return {
    props: {
      orders,
      location,
      range,
    },
  }
}

export default Listings

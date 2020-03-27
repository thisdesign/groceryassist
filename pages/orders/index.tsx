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
  data: OrderRes
  location: LocationRes
}> = ({ data, location }) => {
  if (location) {
    return <OrderList orders={data} location={location} />
  }

  return <AddressCapture onSubmit={address => goToOrdersPage(address)} />
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query
}) => {
  const data = await getOrders()
  let location = null

  if (query.a) {
    const address = query.a.toString()
    location = await getLocationByAddress(address)
  }

  return {
    props: {
      data,
      location
    }
  }
}

export default Listings

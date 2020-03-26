import Error from "next/error"
import { NextPage, GetServerSideProps } from "next"
import { OrderList } from "../../components"
import { OrderRes, LocationRes } from "../../types"
import "isomorphic-unfetch"
import { getOrders, getLocationByAddress } from "../../middleware"
import { DEFAULT_CORDS } from "../../constants"

const Listings: NextPage<{ data: OrderRes; location: LocationRes }> = ({
  data,
  location
}) => {
  return (
    <>
      <OrderList orders={data} location={location} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await getOrders()

  const address = query.a
    ? query.a.toString()
    : "4231 N. Interstate Ave, Portland OR, 97217"
  const location = await getLocationByAddress(address)

  return { props: { data, location } }
}

export default Listings

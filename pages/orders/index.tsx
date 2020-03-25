import Error from "next/error"
import { NextPage, GetServerSideProps } from "next"
import { OrderList } from "../../components"
import { OrderRes, LocationRes } from "../../types"
import "isomorphic-unfetch"
import { getOrders, getLocationByAddress } from "../../middleware"

const Listings: NextPage<{ data: OrderRes; location: LocationRes }> = ({
  data,
  location
}) => {
  return (
    <>
      {location ? (
        <OrderList orders={data} location={location} />
      ) : (
        <Error statusCode={404} />
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await getOrders()

  if (query.a) {
    const qddress = query.a.toString()
    const location = await getLocationByAddress(qddress)
    return { props: { data, location } }
  }

  return { props: {} }
}

export default Listings

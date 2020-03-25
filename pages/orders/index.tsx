import { NextPage, GetServerSideProps } from "next"
import { OrderList } from "../../components"
import { OrderRes, Coords, LocationRes } from "../../types"
import "isomorphic-unfetch"
import { getOrders, geocode } from "../../middleware"
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

  const coords: Coords = query.l
    ? ((query.l
        .toString()
        .split(",")
        .map(str => parseFloat(str)) as unknown) as Coords)
    : DEFAULT_CORDS

  const location = await geocode(coords)

  return { props: { data, location } }
}

export default Listings

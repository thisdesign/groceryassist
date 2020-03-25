import { NextPage, GetServerSideProps } from "next"
import { OrderList } from "../../components"
import { OrderRes, Coords } from "../../types"
import "isomorphic-unfetch"
import { getOrders } from "../../middleware"

const Listings: NextPage<{ data: OrderRes; coords: Coords }> = ({
  data,
  coords
}) => {
  return (
    <>
      <OrderList orders={data} coords={coords} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await getOrders()

  const coords = query.l
    ? query.l
        .toString()
        .split(",")
        .map(str => parseFloat(str))
    : [45.515369, -122.654716]

  return { props: { data, coords } }
}

export default Listings

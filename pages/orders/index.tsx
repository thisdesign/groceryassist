import { NextPage } from "next"
import GoogleMapReact from "google-map-react"
import { OrderList, LineItem } from "../../components"
import { OrderRes, latLng } from "../../types"
import "isomorphic-unfetch"
import { getOrders } from "../../middleware"

const Listings: NextPage<{ data: OrderRes; location: latLng }> = ({
  data,
  location
}) => {
  return (
    <>
      <OrderList orders={data} location={location} />
    </>
  )
}

Listings.getInitialProps = async () => {
  const data = await getOrders()

  const location: latLng = await fetch("http://gd.geobytes.com/GetCityDetails")
    .then(res => res.json())
    .then(({ geobyteslatitude, geobyteslongitude }) => ({
      lat: parseFloat(geobyteslatitude),
      lng: parseFloat(geobyteslongitude)
    }))

  return { data, location }
}
export default Listings

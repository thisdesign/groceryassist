import React, { useState } from "react"
import GoogleMapReact from "google-map-react"
import Link from "next/link"
import { LineItem, MapMarker, ResultsHeader } from ".."
import { OrderRes, latLng } from "../../types"
import S from "./OrderList.Styled"

const GOOGLE_MAP_API_KEY = "AIzaSyBUPahFeC6Bucs95Ucc5Hf-QMO1S24nxfk"
const CENTER = { lat: 45.515369, lng: -122.654716 }

const OrderList: React.FC<{ orders: OrderRes }> = ({ orders }) => {
  const [hoveredId, setHoveredId] = useState<string>(null)

  return (
    <S.OrderList>
      <div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          defaultCenter={CENTER}
          defaultZoom={14}
        >
          {orders.map(item => (
            <MapMarker
              key={item._id}
              lat={item.location.lat}
              lng={item.location.lng}
              data={item}
              isHovered={hoveredId === item._id}
              setHoveredId={setHoveredId}
            />
          ))}
        </GoogleMapReact>
      </div>
      <div>
        <ResultsHeader data={orders} />
        {orders.map(order => (
          <LineItem
            isHovered={order._id === hoveredId}
            data={order}
            key={order._id}
            setHoveredId={setHoveredId}
          />
        ))}
      </div>
    </S.OrderList>
  )
}

export default OrderList

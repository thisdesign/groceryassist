import React, { useState } from "react"
import GoogleMapReact from "google-map-react"
import { LineItem, MapMarker, ResultsHeader } from ".."
import { OrderRes, Coords } from "../../types"
import S from "./OrderList.Styled"

const GOOGLE_MAP_API_KEY = "AIzaSyBUPahFeC6Bucs95Ucc5Hf-QMO1S24nxfk"

const OrderList: React.FC<{
  orders: OrderRes
  coords: Coords
}> = ({ orders, coords }) => {
  const [hoveredId, setHoveredId] = useState<string>(null)

  return (
    <S.OrderList>
      <div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          defaultCenter={{ lat: coords[0], lng: coords[1] }}
          defaultZoom={13}
          options={{
            zoomControl: false,
            panControl: false,
            draggable: false
          }}
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

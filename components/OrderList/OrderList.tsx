import React, { useState } from "react"
import GoogleMapReact from "google-map-react"
import { LineItem, MapMarker, ResultsHeader, Map } from ".."
import { OrderRes, Coords } from "../../types"
import S from "./OrderList.Styled"
import getDistBetweenCoords from "../../util/getDistBetweenCords"

const OrderList: React.FC<{
  orders: OrderRes
  coords: Coords
}> = ({ orders, coords }) => {
  const [hoveredId, setHoveredId] = useState<string>(null)

  return (
    <S.OrderList>
      <div>
        <Map center={{ lat: coords[0], lng: coords[1] }}>
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
        </Map>
      </div>
      <div>
        <ResultsHeader data={orders} />
        {orders.map(order => (
          <LineItem
            isHovered={order._id === hoveredId}
            data={order}
            key={order._id}
            setHoveredId={setHoveredId}
            distance={getDistBetweenCoords(
              [order.location.lat, order.location.lng],
              coords
            )}
          />
        ))}
      </div>
    </S.OrderList>
  )
}

export default OrderList

import React, { useState } from "react"

import { LineItem, MapMarker, ResultsHeader, Map } from ".."
import { OrderRes, Coords, LocationRes } from "../../types"
import S from "./OrderList.Styled"
import getDistBetweenCoords from "../../util/getDistBetweenCords"

const OrderList: React.FC<{
  orders: OrderRes
  location: LocationRes
}> = ({ orders, location }) => {
  const [hoveredId, setHoveredId] = useState<string>(null)
  const coords: Coords = [location.lat, location.lng]

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
        <ResultsHeader data={orders} location={location} />
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

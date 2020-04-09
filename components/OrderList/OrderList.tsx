import React, { useState } from "react"

import { LineItem, MapMarker, ResultsHeader, Map, CurrentLocation } from ".."
import { OrderRes, Coords, LocationRes } from "../../types"
import S from "./OrderList.Styled"
import getDistBetweenCoords from "../../util/getDistBetweenCords"

const OrderList: React.FC<{
  orders: OrderRes
  location: LocationRes
  range: number
}> = ({ orders, location, range }) => {
  const [hoveredId, setHoveredId] = useState<string>(null)
  const [ctrLat, ctrLng]: Coords = [location.lat, location.lng]

  return (
    <S.OrderList>
      <S.MapWrapper>
        <Map center={{ lat: ctrLat, lng: ctrLng }} radius={range}>
          <CurrentLocation lat={ctrLat} lng={ctrLng} />
          {orders.map((item) => {
            const [lng, lat] = item.location.coordinates

            return (
              <MapMarker
                key={item._id}
                lat={lat}
                lng={lng}
                data={item}
                isHovered={hoveredId === item._id}
                setHoveredId={setHoveredId}
              />
            )
          })}
        </Map>
      </S.MapWrapper>
      <div>
        <ResultsHeader data={orders} location={location} range={range} />
        {orders.map((order) => (
          <LineItem
            isHovered={order._id === hoveredId}
            data={order}
            key={order._id}
            setHoveredId={setHoveredId}
            distance={getDistBetweenCoords(
              [order.location.coordinates[1], order.location.coordinates[0]],
              [ctrLat, ctrLng]
            )}
          />
        ))}
      </div>
    </S.OrderList>
  )
}

export default OrderList

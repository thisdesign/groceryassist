/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import Link from "next/link"
import S from "./MapMarker.Styled"
import { OrderDb } from "../../types"

const MapMarker: React.FC<{
  lat: any
  lng: any
  data: OrderDb
  isHovered: boolean
}> = ({ lat, lng, data, isHovered }) => (
  <Link as={`/orders/${data._id}`} href="/orders/[orderId]">
    <a>
      <S.Marker isHovered={isHovered}>{data.user.first}</S.Marker>
    </a>
  </Link>
)
export default MapMarker

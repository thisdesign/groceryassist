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
  setHoveredId: React.Dispatch<React.SetStateAction<string>>
}> = ({ lat, lng, data, isHovered, setHoveredId }) => (
  <Link as={`/orders/${data._id}`} href="/orders/[orderId]">
    <a>
      <S.Marker
        isHovered={isHovered}
        onMouseOver={() => setHoveredId(data._id)}
        onFocus={() => setHoveredId(data._id)}
        onMouseOut={() => setHoveredId(null)}
        onBlur={() => setHoveredId(null)}
      >
        {data.user.first}
      </S.Marker>
    </a>
  </Link>
)
export default MapMarker

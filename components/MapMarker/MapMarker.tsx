/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import S from "./MapMarker.Styled"

const MapMarker: React.FC<{
  lat: any
  lng: any
  text: string
  isHovered: boolean
}> = ({ lat, lng, text, isHovered }) => (
  <S.Marker isHovered={isHovered}>{text}</S.Marker>
)
export default MapMarker

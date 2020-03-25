/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-delimiter-style */
import S from "./MapMarker.Styled";

const MapMarker: React.FC<{
  lat: any;
  lng: any;
  text: string;
}> = ({ lat, lng, text }) => <S.Marker>{text}</S.Marker>;
export default MapMarker;

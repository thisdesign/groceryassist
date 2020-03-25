import React from "react"
import S from "./CurrentLocation.Styled"

const CurrentLocation: React.FC<{
  lat: any
  lng: any
}> = () => {
  return <S.Circle />
}

export default CurrentLocation

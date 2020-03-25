import React from "react"
import { OrderRes, LocationRes } from "../../types"
import { PinIcon } from ".."
import S from "./ResultsHeader.styled"

const ResultsHeader: React.FC<{
  data: OrderRes
  location: LocationRes
}> = ({ data, location }) => {
  return (
    <S.ResultsHeader>
      <S.LocationBox>
        <PinIcon />
        {"  "}
        {location.city}, {location.state}
      </S.LocationBox>

      <S.Title>{data.length} open orders</S.Title>
    </S.ResultsHeader>
  )
}

export default ResultsHeader

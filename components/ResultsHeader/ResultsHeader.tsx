import React from "react"
import { OrderRes } from "../../types"
import { UIBox, PinIcon } from ".."
import S from "./ResultsHeader.styled"

const ResultsHeader: React.FC<{ data: OrderRes }> = ({ data }) => {
  return (
    <S.ResultsHeader>
      <S.LocationBox>
        <PinIcon />
        {"  "}
        Portland, OR
      </S.LocationBox>

      <S.Title>{data.length} open orders</S.Title>
    </S.ResultsHeader>
  )
}

export default ResultsHeader

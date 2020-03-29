import React from "react"
import Router from "next/router"
import spaceToPlus from "util/spaceToPlus"
import { OrderRes, LocationRes } from "../../types"
import { AddressInput } from ".."
import S from "./ResultsHeader.styled"

const ResultsHeader: React.FC<{
  data: OrderRes
  location: LocationRes
}> = ({ data, location }) => {
  return (
    <S.ResultsHeader>
      <AddressInput
        onSubmit={address => Router.push(`/orders?a=${spaceToPlus(address)}`)}
        defaultText={`${location.city}, ${location.state}`}
      />

      <S.Title>{data.length} open orders</S.Title>
    </S.ResultsHeader>
  )
}

export default ResultsHeader

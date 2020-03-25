import React from "react"
import { OrderRes } from "../../types"
import { UIBox } from ".."

const ResultsHeader: React.FC<{ data: OrderRes }> = ({ data }) => {
  return <UIBox>{data.length} open orders</UIBox>
}

export default ResultsHeader

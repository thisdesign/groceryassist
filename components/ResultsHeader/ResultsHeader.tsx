import React, { useState } from "react"
import Router from "next/router"
import spaceToPlus from "util/spaceToPlus"
import { OrderRes, LocationRes } from "../../types"
import { AddressInput } from ".."
import S from "./ResultsHeader.styled"

const ResultsHeader: React.FC<{
  data: OrderRes
  location: LocationRes
}> = ({ data, location }) => {
  const getLocationName = (): string => {
    const { neighborhood, city, state } = location

    if (neighborhood) {
      return neighborhood
    }

    if (city && state) {
      return `${city}, ${state}`
    }

    return location.country
  }

  return (
    <S.ResultsHeader>
      <AddressInput
        onSubmit={(address) => Router.push(`/orders?a=${spaceToPlus(address)}`)}
        defaultText={getLocationName()}
      />

      <S.Filter>
        <S.Title>{data.length} open orders</S.Title>
        <Dropdown />
      </S.Filter>
    </S.ResultsHeader>
  )
}

const RANGES = [5, 10, 20]

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (i: number) => {
    setIsOpen(false)
    setActiveIndex(i)

    Router.push({
      pathname: "/orders",
      query: {
        ...Router.query,
        range: RANGES[i],
      },
    })
  }

  return (
    <S.Dropdown.UIWrap>
      <S.Dropdown.Display onClick={() => setIsOpen(true)}>
        {RANGES[activeIndex]} mi
        <S.Dropdown.Carret>▼</S.Dropdown.Carret>
      </S.Dropdown.Display>
      <S.Dropdown.Window isOpen={isOpen}>
        {RANGES.map((miRange, i) => (
          <S.Dropdown.Item
            key={miRange}
            active={i === activeIndex}
            onClick={() => handleClick(i)}
          >
            {miRange} mi
          </S.Dropdown.Item>
        ))}
      </S.Dropdown.Window>
    </S.Dropdown.UIWrap>
  )
}

export default ResultsHeader

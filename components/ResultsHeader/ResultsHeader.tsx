import React, { useState } from "react"
import Router from "next/router"
import spaceToPlus from "util/spaceToPlus"
import { OrderRes, LocationRes } from "../../types"
import { AddressInput } from ".."
import S from "./ResultsHeader.styled"
import { RANGES } from "../../constants"

const ResultsHeader: React.FC<{
  data: OrderRes
  location: LocationRes
  range: number
}> = ({ data, location, range }) => {
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
        <Dropdown range={range} />
      </S.Filter>
    </S.ResultsHeader>
  )
}

const Dropdown: React.FC<{ range: number }> = ({ range }) => {
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
        {range} mi
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

import React, { useState } from "react"
import Router from "next/router"
import TextInput from "../TextInput/TextInput"
import { GeoPrediction } from "../../types"
import S from "./AddressCapture.Styled"
import { UIButton } from ".."

const AddressCapture: React.FC<{
  onSubmit: (address: string) => void
}> = ({ onSubmit }) => {
  const [predictions, setPredictions] = useState<GeoPrediction[]>([])
  const [suggestIndex, setSuggestIndex] = useState<number>(0)
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const [inputVal, setInputVal] = useState<string>("")
  const prediction = predictions ? predictions[suggestIndex] : null

  /**
   * Methods
   */

  const handleItemClick = (i: number) => {
    setSuggestIndex(i)
    setMenuOpen(false)
  }

  const fetchPredictions = (input: string) => {
    return fetch(
      `http://localhost:3000/api/location/predictions?input=${input}`
    ).then(res => res.json())
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuOpen(true)
    setInputVal(e.target.value)
    fetchPredictions(e.target.value).then(data =>
      setPredictions(data.predictions)
    )
  }

  const handleEnterKey = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (prediction) {
      setMenuOpen(false)
      setInputVal(prediction.full)
    }
  }

  const handleButtonClick = () => {
    if (prediction.full) {
      onSubmit(prediction.full)
    }
  }

  return (
    <form onSubmit={handleEnterKey}>
      <TextInput
        placeholder="Street Address"
        value={inputVal}
        onChange={handleInputChange}
      />
      {isMenuOpen && predictions && (
        <S.Wrapper>
          {predictions.map((item, i) => (
            <S.PredictionItem
              onClick={() => handleItemClick(i)}
              isSelected={suggestIndex === i}
            >
              <h5>{item.main}</h5>
              <h6>{item.secondary}</h6>
            </S.PredictionItem>
          ))}
        </S.Wrapper>
      )}
      <br />
      <UIButton onClick={handleButtonClick}>Select Address</UIButton>
    </form>
  )
}

export default AddressCapture

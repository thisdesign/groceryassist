import React, { useState } from "react"
import TextInput from "../TextInput/TextInput"
import { GeoPrediction } from "../../types"
import S from "./AddressInput.Styled"
import { UIButton } from ".."
import { fetchPredictions } from "../../middleware"

const AddressInput: React.FC<{
  onSubmit: (address: string) => void
  buttonText?: string
}> = ({ onSubmit, buttonText = "Next" }) => {
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

    if (prediction) {
      setInputVal(prediction.full)
    }
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
    if (prediction) {
      onSubmit(prediction.full)
    }
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleEnterKey}>
        <TextInput
          placeholder="Street Address"
          value={inputVal}
          onChange={handleInputChange}
        />
        {isMenuOpen && predictions && (
          <S.PredictionWrapper>
            {predictions.map((item, i) => (
              <S.PredictionItem
                onClick={() => handleItemClick(i)}
                isSelected={suggestIndex === i}
              >
                <h5>{item.main}</h5>
                <h6>{item.secondary}</h6>
              </S.PredictionItem>
            ))}
          </S.PredictionWrapper>
        )}
        <br />
      </form>
      <UIButton onClick={handleButtonClick}>{buttonText}</UIButton>
    </S.Wrapper>
  )
}

export default AddressInput

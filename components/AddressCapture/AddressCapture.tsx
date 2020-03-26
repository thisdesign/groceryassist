import React, { useState } from "react"
import TextInput from "../TextInput/TextInput"
import { GeoPrediction } from "../../types"

const AddressCapture: React.FC<{
  onSubmit: (address: string) => void
}> = ({ onSubmit }) => {
  const [predictions, setPredictions] = useState<GeoPrediction[]>([])
  const [address, setAddress] = useState<string | null>(null)

  const handleSubmit = () => {
    if (address) {
      const parsedAddress = address.replace(/\s/g, "+")
      onSubmit(parsedAddress)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    fetch(
      `http://localhost:3000/api/location/predictions?input=${e.target.value}`
    )
      .then(res => res.json())
      .then(data => {
        setPredictions(data.predictions)
      })
  }

  return (
    <div onClick={handleSubmit}>
      <TextInput placeholder="Street Address" onChange={handleChange} />
      {predictions &&
        predictions.map(item => (
          <Prediction setAddress={setAddress} data={item} />
        ))}
    </div>
  )
}

const Prediction: React.FC<{
  data: GeoPrediction
  setAddress: React.Dispatch<React.SetStateAction<string>>
}> = ({ data, setAddress }) => {
  return (
    <div onClick={() => setAddress(data.full)}>
      <div>{data.main}</div>
      <div>{data.secondary}</div>
      <hr />
    </div>
  )
}

export default AddressCapture

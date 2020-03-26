import React from "react"

const AddressCapture: React.FC<{
  onSubmit: (address: string) => void
}> = ({ onSubmit }) => {
  const address = "4022 N Albina Ave, Portland OR, 92772"
  const parsedAddress = address.replace(/\s/g, "+")

  const handleSubmit = () => {
    onSubmit(parsedAddress)
  }
  return <div onClick={handleSubmit}>{address}</div>
}

export default AddressCapture

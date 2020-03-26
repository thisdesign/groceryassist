import React, { useState } from "react"
import Cookie from "js-cookie"
import { TextInput, MediumHeading, TwoPanel } from ".."
import S from "./PhoneInput.Styled"

const PhoneCapture: React.FC<{
  onNext: (num: number) => any
}> = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [err, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
    setError(null)
  }

  const parsed = parseFloat(phoneNumber.replace(/[^0-9]/g, ""))
  const isValid = parsed.toString().length === 10

  const handleNext = () => {
    if (!isValid) {
      setError("Please enter a valid 10-digit number")
    } else {
      onNext(parsed)
      Cookie.set("__phone_num", parsed)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleNext()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput onChange={handleChange} placeholder="Phone Number" />
        {err && <S.Error>{err}</S.Error>}
        <S.Button onClick={handleNext}>Next</S.Button>
      </form>
    </div>
  )
}

export default PhoneCapture

import React, { useState } from "react"
import Cookie from "js-cookie"
import { TextInput, MediumHeading } from ".."
import S from "./PhoneCapture.Styled"

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

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isValid) {
      setError("Please enter a valid number")
    } else {
      onNext(parsed)
      Cookie.set("__phone_num", parsed)
    }
  }

  return (
    <S.TwoPanel>
      <S.Image />
      <S.Wrapper>
        <div>
          <form onSubmit={handleNext}>
            <MediumHeading>Enter your number to get started</MediumHeading>
            <S.Label>
              Your delivery person will call you to set things up.
            </S.Label>
            <TextInput onChange={handleChange} placeholder="Phone Number" />
            {err && <S.Error>{err}</S.Error>}
            <S.Button onClick={handleNext}>Next</S.Button>
          </form>
        </div>
      </S.Wrapper>
    </S.TwoPanel>
  )
}

export default PhoneCapture

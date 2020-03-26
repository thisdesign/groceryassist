import React, { useState } from "react"
import Cookie from "js-cookie"
import { TextInput } from ".."
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
    }

    onNext(parsed)
    Cookie.set("__phone_num", parsed)
  }

  return (
    <S.TwoPanel>
      <S.Image />
      <S.Wrapper>
        <div>
          <form onSubmit={handleNext}>
            <S.Head>Enter your number to get started</S.Head>
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

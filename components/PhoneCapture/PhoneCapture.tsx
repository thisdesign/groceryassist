import React, { useState } from "react"
import Cookie from "js-cookie"
import { TextInput, MediumHeading, TwoPanel } from ".."
import S from "./PhoneCapture.Styled"
import UIButton from "../UIButton/UIButton"

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
      setError("Please enter a valid number")
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
    <TwoPanel image="https://images.unsplash.com/photo-1583247949334-e07ab70681c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80">
      <div>
        <form onSubmit={handleSubmit}>
          <MediumHeading>Enter your number to get started</MediumHeading>
          <S.Label>
            Your delivery person will call you to set things up.
          </S.Label>
          <TextInput onChange={handleChange} placeholder="Phone Number" />
          {err && <S.Error>{err}</S.Error>}
          <S.Button onClick={handleNext}>Next</S.Button>
        </form>
      </div>
    </TwoPanel>
  )
}

export default PhoneCapture

import React from "react"
import { TextInput } from ".."
import S from "./PhoneCapture.Styled"

const PhoneCapture = () => {
  return (
    <S.Wrapper>
      <S.Head>New Order</S.Head>
      <S.Label>Enter your phone number to continue.</S.Label>
      <TextInput placeholder="Phone Number" />
      <S.Button>Next</S.Button>
    </S.Wrapper>
  )
}

export default PhoneCapture

import React from "react"
import { TextInput } from ".."
import S from "./PhoneCapture.Styled"

const PhoneCapture = () => {
  return (
    <S.TwoPanel>
      <S.Image />
      <S.Wrapper>
        <div>
          <S.Head>Enter your number to get started</S.Head>
          <S.Label>
            Your delivery person will call you to set things up.
          </S.Label>
          <TextInput placeholder="Phone Number" />
          <S.Button>Next</S.Button>
        </div>
      </S.Wrapper>
    </S.TwoPanel>
  )
}

export default PhoneCapture

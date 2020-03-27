import React from "react"
import TwoPanel from "../TwoPanel/TwoPanel"
import { AddressInput, MediumHeading, TextInput } from ".."
import S from "./AddressCapture.Styled"

const AddressCapture: React.FC<{
  onSubmit: (address: string) => void
}> = ({ onSubmit }) => {
  return (
    <TwoPanel image="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
      <MediumHeading>
        Enter your address to find people in need nearby
      </MediumHeading>
      <S.FormItems>
        <AddressInput onSubmit={onSubmit} buttonText="See Orders" />
      </S.FormItems>
    </TwoPanel>
  )
}

export default AddressCapture

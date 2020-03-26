import React from "react"
import TwoPanel from "../TwoPanel/TwoPanel"
import { AddressInput, MediumHeading, TextInput } from ".."
import S from "./AddressCapture.Styled"

const AddressCapture: React.FC<{
  onSubmit: (address: string) => void
}> = ({ onSubmit }) => {
  return (
    <TwoPanel image="https://images.unsplash.com/photo-1545186182-9faaf78480b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80">
      <MediumHeading>Tell us about yourself</MediumHeading>
      <S.FormItems>
        <TextInput placeholder="First" />
        <TextInput placeholder="Last" />
        <AddressInput onSubmit={onSubmit} buttonText="See Orders" />
      </S.FormItems>
    </TwoPanel>
  )
}

export default AddressCapture

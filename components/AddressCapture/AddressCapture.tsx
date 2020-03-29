import React from "react"
import TwoPanel from "../TwoPanel/TwoPanel"
import { AddressInput, MediumHeading, TextInput } from ".."
import S from "./AddressCapture.Styled"
import { IMAGES } from "../../constants"

const AddressCapture: React.FC<{
  onSubmit: (address: string) => void
}> = ({ onSubmit }) => {
  return (
    <TwoPanel image={IMAGES.MARKET}>
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

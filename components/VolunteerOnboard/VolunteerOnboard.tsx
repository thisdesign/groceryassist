import React, { useState } from "react"
// import { createUser } from "../../middleware"
import { TwoPanel, PhoneInput, MediumHeading, AddressInput, UIButton } from ".."
import { NewUserReq } from "../../types"
import TextInput from "../TextInput/TextInput"
import S from "./VolunteerOnboard.Styled"

const IMAGES = [
  "https://images.unsplash.com/photo-1583247949334-e07ab70681c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=780&q=60",
  "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=780&q=80"
]

const initialState = {
  first: null,
  last: null,
  phone: 6168227256,
  address: null
}

const VolunteerOnboard = () => {
  const [data, setData] = useState<NewUserReq>(initialState)
  const isPhoneScreen = !data.phone

  const handlePhoneInput = (phone: number) => {
    setData({ ...data, phone })
    // TODO: check if user exists here
  }

  return (
    <TwoPanel image={isPhoneScreen ? IMAGES[0] : IMAGES[1]}>
      {isPhoneScreen ? (
        <PhoneScreen handlePhoneInput={handlePhoneInput} />
      ) : (
        <AddressScreen />
      )}
    </TwoPanel>
  )
}

const PhoneScreen: React.FC<{
  handlePhoneInput: (phone: number) => void
}> = ({ handlePhoneInput }) => {
  return (
    <div>
      <MediumHeading>
        Enter your number to <br />
        get started
      </MediumHeading>
      {/* Your phone will be used to lorem ipsum dolor sit. */}
      <PhoneInput onNext={handlePhoneInput} />
    </div>
  )
}

const AddressScreen: React.FC<{}> = () => {
  return (
    <div>
      <MediumHeading>
        Enter some final information
        <br /> to get started
      </MediumHeading>
      <S.InfoGrid>
        <TextInput placeholder="First" />
        <TextInput placeholder="Last" />
        <AddressInput onSubmit={text => console.log(text)} />
        <div>
          <UIButton>See Orders</UIButton>
        </div>
      </S.InfoGrid>
    </div>
  )
}

export default VolunteerOnboard

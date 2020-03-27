import React, { useState, useEffect } from "react"
// import { createUser } from "../../middleware"
import { useForm } from "react-hook-form"
import { TwoPanel, PhoneInput, MediumHeading, AddressInput, UIButton } from ".."
import { NewUserReq } from "../../types"
import TextInput from "../TextInput/TextInput"
import S from "./VolunteerOnboard.Styled"
import { createUser } from "../../middleware"

const IMAGES = [
  "https://images.unsplash.com/photo-1583247949334-e07ab70681c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=780&q=60",
  "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=780&q=80"
]

const initialState = {
  first: null,
  last: null,
  phone: null,
  address: null
}

const VolunteerOnboard = () => {
  const [data, setData] = useState<NewUserReq>(initialState)
  const isPhoneScreen = !data.phone

  const handlePhoneInput = (phone: number) => setData({ ...data, phone })

  const pushData = (newItem: object) => {
    createUser({ ...data, ...newItem }).then(apiRes => {
      console.log(apiRes)
    })
  }

  return (
    <TwoPanel image={isPhoneScreen ? IMAGES[0] : IMAGES[1]}>
      {isPhoneScreen ? (
        <PhoneScreen handlePhoneInput={handlePhoneInput} />
      ) : (
        <AddressScreen pushData={pushData} />
      )}
    </TwoPanel>
  )
}

const PhoneScreen: React.FC<{
  handlePhoneInput: (phone: number) => void
}> = ({ handlePhoneInput }) => {
  return (
    <div>
      <MediumHeading>Create an account by entering your number</MediumHeading>
      {/* Your phone will be used to lorem ipsum dolor sit. */}
      <S.FormWrapper>
        <PhoneInput onNext={handlePhoneInput} />
      </S.FormWrapper>
    </div>
  )
}

const AddressScreen: React.FC<{
  pushData: (newItem: object) => void
}> = ({ pushData }) => {
  const [address, setAddress] = useState<string>(null)
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    if (address) {
      pushData({ ...data, address })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MediumHeading>
          Enter some final information
          <br /> to get started
        </MediumHeading>
        <S.InfoGrid>
          <TextInput
            placeholder="First"
            name="first"
            ref={register({ required: true, maxLength: 80 })}
          />
          <TextInput
            placeholder="Last"
            name="last"
            ref={register({ required: true, maxLength: 100 })}
          />

          <AddressInput onSubmit={addrString => setAddress(addrString)} />
          <div>
            <UIButton>See Orders</UIButton>
          </div>
        </S.InfoGrid>
      </form>
    </div>
  )
}

export default VolunteerOnboard

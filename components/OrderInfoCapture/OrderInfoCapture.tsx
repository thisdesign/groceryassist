/* eslint-disable react/jsx-wrap-multilines */
import {
  UIButton,
  TextArea,
  TextInput,
  AddressInput,
  Paragraph,
  AppFrame,
  LargeHeading,
  MediumHeading,
} from "components"
import { Item, NewOrderState } from "types"
import { useForm } from "react-hook-form"
import Router from "next/router"
import { addOrder } from "middleware"
import S from "./OrderInfoCapture.Styled"

const OrderInfo: React.FC<{ data: NewOrderState }> = ({ data }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (formData) => {
    const mergedData = {
      ...data,
      ...formData,
    }

    addOrder(mergedData)
      .then(() => {
        Router.push("/")
      })
      .catch((err) => console.log(err))
  }

  return (
    <AppFrame
      header={
        <>
          <MediumHeading>Complete Order</MediumHeading>
          <Paragraph>Please fill out the necessary fields.</Paragraph>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Wrap>
          Your contact information
          <Paragraph>Only your first name will be displayed.</Paragraph>
          <S.Grid>
            <TextInput
              style={{ gridColumn: "span 3" }}
              type="text"
              placeholder="First name"
              name="first"
              ref={register({ required: true, maxLength: 80 })}
            />
            <TextInput
              style={{ gridColumn: "span 3" }}
              type="text"
              placeholder="Last name"
              name="last"
              ref={register({ required: true, maxLength: 100 })}
            />
            <TextInput
              type="tel"
              placeholder="Phone number"
              name="phone"
              ref={register({ required: true, min: 10, maxLength: 13 })}
            />

            <TextInput
              style={{ gridColumn: "span 1" }}
              type="text"
              placeholder="Age"
              name="age"
              ref={register({ required: true })}
            />
          </S.Grid>
          Delivery Location
          <Paragraph>You&apos;ll be paired with nearby volunteers</Paragraph>
          <S.Grid>
            <TextInput
              style={{ gridColumn: "span 4" }}
              type="text"
              placeholder="Address"
              name="address"
              ref={register({ required: true, min: 9 })}
            />
            <TextInput
              type="text"
              placeholder="City"
              name="city"
              ref={register({ required: true, min: 3 })}
            />
            <TextInput
              style={{ gridColumn: "span 1" }}
              type="text"
              placeholder="State"
              name="state"
              ref={register({ required: true, min: 3 })}
            />

            <TextInput
              type="number"
              placeholder="Zip"
              name="zip"
              ref={register({ required: true, min: 5 })}
            />
            <TextInput
              type="text"
              placeholder="Apt, suite. (optional)"
              name="apt"
              ref={register({ required: false })}
            />
          </S.Grid>
          <div>
            Payment Preferences
            <Paragraph> [payment Preferences go here]</Paragraph>
            <br />
            <br />
            <br />
          </div>
          Other Needs
          <Paragraph>
            Please provide any food allergies, dietary restrictions <br /> or
            specific delivery instructions.
          </Paragraph>
          <S.Grid>
            <TextArea
              style={{ gridColumn: "span 5" }}
              placeholder="Order Notes (optional)"
              name="orderNotes"
              rows={4}
              ref={register}
            />
          </S.Grid>
          <UIButton type="submit">Submit</UIButton>
        </S.Wrap>
      </form>
    </AppFrame>
  )
}

export default OrderInfo

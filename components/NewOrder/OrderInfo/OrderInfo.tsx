import { UIButton, TextArea, TextInput, AddressInput } from "components"
import { Item } from "types"
import { useForm } from "react-hook-form"
import Paragraph from "components/Paragraph/Paragraph"
import { addOrder } from "middleware"
import Router from "next/router"
import S from "./OrderInfo.Styled"
import { PageState } from "../NewOrder"

import GroceryStyled from "../GroceryList/GroceryList.Styled"

const OrderInfo: React.FC<{ state: PageState }> = ({ state: pageState }) => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = formData => {
    const mergedData = {
      ...pageState,
      ...formData
    }

    addOrder(mergedData)
      .then(() => {
        Router.push("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GroceryStyled.White>
        <S.Wrap>
          Your contact information
          <Paragraph>We only list your first name</Paragraph>
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
              placeholder="Mobile number"
              name="mobile"
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
          Where should we deliver?
          <Paragraph>You will be paired with nearby volunteers</Paragraph>
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
          Where should we deliver?
          <Paragraph>
            Are you gluten free? Where would you like us to deliver?
          </Paragraph>
          <S.Grid>
            <TextArea
              style={{ gridColumn: "span 1" }}
              placeholder="Order Notes (optional)"
              name="orderNotes"
              rows={4}
              ref={register}
            />
          </S.Grid>
          <UIButton type="submit">Submit</UIButton>
        </S.Wrap>
      </GroceryStyled.White>
    </form>
  )
}

export default OrderInfo

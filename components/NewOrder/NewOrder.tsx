import React from "react"
import UIWrapper from "components/UIWrapper/UIWrapper"
import {
  LargeHeading,
  MediumHeading,
  BottomBar,
  UIButton,
  TextInput,
  AddressInput,
  Paragraph
} from "components"
import S from "./NewOrder.Styled"

const NewOrder = () => {
  return (
    <div>
      <UIWrapper pad>
        <LargeHeading>New Order</LargeHeading>
        <Paragraph>Lorem ipsum dolor sit amet</Paragraph>

        <S.Grid>
          <div>items here</div>
          <div>
            <MediumHeading>Where can we find you?</MediumHeading>
            <Paragraph>
              Your information will be used to <br />
              lorem ipsum dolor sit amet
            </Paragraph>
            <S.FormWrapper>
              <AddressInput onSubmit={address => console.log(address)} />
              <TextInput placeholder="First" />
              <TextInput placeholder="Last" />
              <TextInput placeholder="Phone" />
              <TextInput placeholder="Age" />
              <textarea placeholder="Additional notes" rows={5} />
            </S.FormWrapper>
          </div>
        </S.Grid>
      </UIWrapper>
      <BottomBar>
        <UIWrapper>
          <UIButton>Place order</UIButton>
        </UIWrapper>
      </BottomBar>
    </div>
  )
}

export default NewOrder

import React from "react"
import {
  UIWrapper,
  LargeHeading,
  Paragraph,
  UIButton,
  LargeMessage,
} from "components"
import S from "./CreateSuccess.Styled"

const CreateSuccess = () => {
  return (
    <LargeMessage>
      <UIWrapper pad>
        <S.Wrapper>
          <LargeHeading>Your request has been submitted</LargeHeading>
          <div>
            Remember, this service is run on basic human compassion and
            kindness. Please honor the system and be patient. Together, we'll
            get through this.
          </div>
          <div>
            Please note that delivery cannot be 100% guaranteed. If you
            haven&apos;t gotten a response in a few days, you may need to find
            alternative means for having your groceries delivered to you.
          </div>
        </S.Wrapper>
      </UIWrapper>
    </LargeMessage>
  )
}

export default CreateSuccess

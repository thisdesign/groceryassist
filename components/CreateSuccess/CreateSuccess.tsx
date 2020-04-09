import React from "react"
import { UIWrapper, LargeHeading, Paragraph, UIButton } from "components"

const CreateSuccess = () => {
  return (
    <div>
      <UIWrapper pad>
        <LargeHeading>Your order has been created</LargeHeading>
        <div>
          Remember, this service is run on basic human compassion and kindness.
          Please honor the system and be patient. Together, we'll get through
          this.
        </div>

        <Paragraph>
          Please note that delivery cannot be 100% guaranteed. If you
          haven&apos;t gotten a response in a few days, you may need to find
          alternative means for having your groceries delivered to you.
        </Paragraph>
        <UIButton>Go Home</UIButton>
      </UIWrapper>
    </div>
  )
}

export default CreateSuccess

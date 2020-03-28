import React from "react"
import {
  MediumHeading,
  UIWrapper,
  BottomBar,
  UIButton,
  Paragraph
} from "components"
import S from "./AppFrame.Styled"

const AppFrame: React.FC<{
  header: React.ReactNode
  bottomBar?: React.ReactNode
}> = ({ header, children, bottomBar }) => {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <UIWrapper pad>{header}</UIWrapper>
        </S.Header>
        <S.Body>
          <UIWrapper pad>{children}</UIWrapper>
        </S.Body>
      </S.Wrapper>
      {bottomBar && (
        <BottomBar>
          <UIWrapper>{bottomBar}</UIWrapper>
        </BottomBar>
      )}
    </>
  )
}

export default AppFrame

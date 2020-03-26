import React from "react"
import S from "./TwoPanel.Styled"

const TwoPanel: React.FC<{ image: string }> = ({ children, image }) => {
  return (
    <S.TwoPanel>
      <S.Image image={image} />
      <S.Wrapper>
        <S.Inner>{children}</S.Inner>
      </S.Wrapper>
    </S.TwoPanel>
  )
}

export default TwoPanel

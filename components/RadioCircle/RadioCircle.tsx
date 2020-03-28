import React from "react"
import S from "./RadioCircle.Styled"

const RadioCircle: React.FC<{ checked: boolean }> = ({ checked }) => {
  return (
    <S.Outline checked={checked}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
      </svg>
    </S.Outline>
  )
}

export default RadioCircle

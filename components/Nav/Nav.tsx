import React from "react"
import Link from "next/link"
import S from "./Nav.Styled"

const Nav = () => {
  return (
    <S.Nav>
      <Link href="/">
        <a>Grocery App</a>
      </Link>
    </S.Nav>
  )
}

export default Nav

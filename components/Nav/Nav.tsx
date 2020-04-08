import React from "react"
import Link from "next/link"
import S from "./Nav.Styled"

const Nav: React.FC<{ floating?: boolean }> = ({ floating }) => {
  return (
    <S.Nav floating={floating}>
      <Link href="/">
        <a>GroceryAssist</a>
      </Link>
    </S.Nav>
  )
}

export default Nav

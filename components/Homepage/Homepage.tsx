import React from "react"
import Link from "next/link"
import "isomorphic-unfetch"
import { UIButton, UIWrapper } from "components"
import S from "./Homepage.Styled"

const Homepage = () => {
  return (
    <S.Page>
      <UIWrapper>
        <S.Head>
          GroceryAssist is a non-profit delivery service dedicated to helping
          those vulnerable to the COVID-19 virus.
        </S.Head>

        <S.ButtonWrapper>
          <Link href="/orders">
            <a>
              <UIButton textColor="brand" color="white">
                I can help someone <br />
                with a grocery pickup
              </UIButton>
            </a>
          </Link>

          <Link href="orders/new">
            <a>
              <UIButton inverted textColor="white" color="white">
                I need help with <br />a grocery delivery
              </UIButton>
            </a>
          </Link>
        </S.ButtonWrapper>
      </UIWrapper>
    </S.Page>
  )
}

export default Homepage

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
          [App name] is a volunteer delivery service to help those vulnerable to
          COVID-19
        </S.Head>

        <S.ButtonWrapper>
          <Link href="/orders">
            <a>
              <UIButton textColor="brand" color="white">
                Pick up groceries <br /> for someone
              </UIButton>
            </a>
          </Link>

          <Link href="orders/new">
            <a>
              <UIButton inverted textColor="white" color="white">
                Have groceries <br />
                delivered
              </UIButton>
            </a>
          </Link>
        </S.ButtonWrapper>
      </UIWrapper>
    </S.Page>
  )
}

export default Homepage

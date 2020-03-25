import styled from "styled-components"
import mq from "../../style/mq"

const OrderList = styled.div`
  @media ${mq.sm} {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;

    & > div {
      width: 50%;

      &:nth-child(2) {
        max-width: 25rem;
        border-right: 1px solid var(--color-grey-2);
      }

      &:nth-child(1) {
        flex: 1;
      }
    }
  }
  & > div {
    &:nth-child(1) {
      height: 250px;
    }
  }
`

export default {
  OrderList
}

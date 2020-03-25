import styled from "styled-components"
import mq from "../../style/mq"

const OrderList = styled.div`
  & > div {
    &:nth-child(1) {
      height: 250px;
    }
  }

  @media ${mq.sm} {
    height: 100%;
    display: flex;
    flex-direction: row-reverse;

    & > div {
      width: 50%;
      height: 100%;

      &:nth-child(2) {
        max-width: 25rem;
        border-right: 1px solid var(--color-grey-2);
      }

      &:nth-child(1) {
        flex: 1;
        height: 100%;
      }
    }
  }
`

export default {
  OrderList
}

import styled from "styled-components"
import mq from "../../style/mq"

const MapWrapper = styled.div`
  height: 250px;
`

const OrderList = styled.div`
  @media ${mq.sm} {
    height: calc(100vh - var(--nav-height));
    display: flex;
    flex-direction: row-reverse;
    overflow: scroll;

    & > div {
      width: 50%;
      height: 100%;

      &:nth-child(2) {
        max-width: 23rem;
      }
    }

    & ${MapWrapper} {
      position: sticky;
      top: 0;
      flex: 1;
      height: 100%;
      margin-bottom: -1px;
      border-left: 1px solid var(--color-grey-2);
    }
  }
`

export default {
  OrderList,
  MapWrapper
}

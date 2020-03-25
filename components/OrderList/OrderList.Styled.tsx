import styled from "styled-components";

const OrderList = styled.div`
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
`;

export default {
  OrderList
};

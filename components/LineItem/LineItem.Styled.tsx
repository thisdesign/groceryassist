import styled from "styled-components";

const LineItem = styled.div`
  border-bottom: 1px solid var(--color-grey-2);
  padding: var(--size-5) var(--size-1);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  h2 {
    font-size: var(--size-6);
    margin-bottom: 0.25rem;
  }

  h3 {
    font-size: var(--size-1);
    color: var(--color-grey-1);
  }
`;

export default {
  LineItem
};

import styled from "styled-components"

const FormItems = styled.div`
  margin-top: var(--size-0);
  display: grid;
  grid-template-areas: "a b" "field field" "d d";
  grid-gap: var(--size-0);

  > * {
    &:nth-child(3) {
      grid-area: field;
    }
    &:nth-child(4) {
      grid-area: d;
    }
  }
`

export default {
  FormItems
}

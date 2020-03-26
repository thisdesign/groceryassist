import styled from "styled-components"

const InfoGrid = styled.div`
  display: grid;
  grid-template-areas:
    "a b"
    "c c"
    "d d";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: var(--size-0);
  margin-top: var(--size-4);

  > * {
    &:nth-child(3) {
      grid-area: c;
    }

    &:nth-child(4) {
      grid-area: d;
      text-align: right;
    }
  }
`

export default {
  InfoGrid
}

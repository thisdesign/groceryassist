import styled from "styled-components";

const Marker = styled.div`
  border: 1px solid var(--color-grey-1);
  font-weight: 600;
  font-size: 13px;
  background: var(--bg-color);
  width: 3rem;
  padding: 0.3rem;
  box-sizing: content-box;
  text-align: center;
  border-radius: 99rem;
  color: var(--color-primary);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.2s background ease, 0.2s color ease;

  &:hover {
    background: var(--color-grey-1);
    color: var(--bg-color);
  }
`;

export default {
  Marker
};

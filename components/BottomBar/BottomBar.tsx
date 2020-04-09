import styled from "styled-components"

const HEIGHT = `var(--size-9)`
const BottomBarStyle = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.05);
  border-top: 1px solid var(--color-grey-2);
  z-index: 20;
  background: var(--bg-color);
  text-align: right;
  grid-template-columns: 1fr;
  align-items: center;
  display: grid;
  height: ${HEIGHT};
`

const Shim = styled.div`
  height: ${HEIGHT};
`

const BottomBar: React.FC = (props) => {
  return (
    <>
      <BottomBarStyle {...props} />
      <Shim />
    </>
  )
}

export default BottomBar

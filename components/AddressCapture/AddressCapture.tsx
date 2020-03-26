import React from "react"
import TwoPanel from "../TwoPanel/TwoPanel"
import { AddressInput } from ".."

const AddressCapture: React.FC<{
  onSubmit: (address: string) => void
}> = ({ onSubmit }) => {
  return (
    <TwoPanel image="https://images.unsplash.com/photo-1545186182-9faaf78480b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=850&q=80">
      <div>Tell us about yourself</div>
      [first][last]
      <AddressInput onSubmit={onSubmit} />
    </TwoPanel>
  )
}

export default AddressCapture

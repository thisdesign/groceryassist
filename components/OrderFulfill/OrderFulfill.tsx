import React from "react"
import { OrderDb } from "types"
import { UIWrapper } from "components"

const OrderFulfill: React.FC<{ order: OrderDb }> = ({ order }) => {
  const {
    user: { first, last, phone },
    items
  } = order

  return (
    <div>
      <UIWrapper>
        <br />
        <br />
        <h2>
          Call <a href={`tel:${phone}`}>{phone}</a> to arrange your pickup and
          payment.
        </h2>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <h1>
          0 / {items.length} items fulfilled for {first} {last}
        </h1>
        <br />
        <br />
        <hr />
        {items.map(item => (
          <div key={item.name}>
            <h2>
              [<>&nbsp;&nbsp;</>] {item.name}
            </h2>
            <hr />
          </div>
        ))}
      </UIWrapper>
    </div>
  )
}

export default OrderFulfill

import { UIWrapper, BottomBar, LargeHeading, GroceryLineItem } from "components"
import { OrderDb } from "../../types"
import S from "./OrderDetail.Styled"

import { Map, UIButton } from ".."

const Marker: React.FC<{ lat: any; lng: any }> = ({ lat, lng }) => (
  <>
    <div />
    <style jsx scoped>
      {`
        div {
          width: 6rem;
          height: 6rem;
          transform: translate3d(-50%, -50%, 0);
          background: rgba(var(--color-brand-rgb), 0.2);
          border-radius: 50%;
          border: 2px solid rgba(var(--color-brand-rgb), 0.6);
          box-shadow: 0 0 10px rgba(var(--color-brand-rgb), 0.3);
        }
      `}
    </style>
  </>
)

const OrderDetail: React.FC<{ data: OrderDb }> = ({ data }) => {
  const { location } = data
  const { lat, lng } = location

  return (
    <div>
      <S.Map>
        <Map center={{ lat, lng }}>
          <Marker {...{ lat, lng }} />
        </Map>
      </S.Map>
      <Details data={data} />
      {!data.status.fulfilled && (
        <BottomBar>
          <UIWrapper>
            <a href={`/orders/${data._id}/fulfill`}>
              <UIButton>Fulfill this order</UIButton>
            </a>
          </UIWrapper>
        </BottomBar>
      )}
    </div>
  )
}

const Details: React.FC<{ data: OrderDb }> = ({ data }) => {
  const { items, location, status } = data
  const { city, state, zip } = location
  return (
    <UIWrapper pad>
      <S.Grid>
        <div>
          {status.fulfilled ? <div>Fulfilled</div> : <div>Open</div>}
          <LargeHeading>Order for {data.user.first}</LargeHeading>
          <div>
            {city}, {state}
          </div>
          <div>{data.user.phone}</div>
        </div>

        <S.ItemWrapper>
          {items.map(({ text, notes }) => (
            <GroceryLineItem text={text} notes={notes} />
          ))}
        </S.ItemWrapper>
      </S.Grid>
    </UIWrapper>
  )
}
export default OrderDetail

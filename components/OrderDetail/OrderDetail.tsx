import { UIWrapper, BottomBar, LargeHeading } from "components"
import getTimeSince from "util/getTimeSince"
import { OrderDb } from "../../types"
import S from "./OrderDetail.Styled"

import { Map, UIButton } from ".."

const OrderDetail: React.FC<{ data: OrderDb }> = ({ data }) => {
  const {
    location: {
      coordinates: [lng, lat],
    },
  } = data

  return (
    <div>
      <S.Map>
        <Map center={{ lat, lng }} radius={0.7} />
      </S.Map>
      <Details data={data} />
      {!data.status.fulfilled && (
        <BottomBar>
          <UIWrapper>
            <a href={`/orders/${data._id}/connect`}>
              <UIButton>Fulfill this order</UIButton>
            </a>
          </UIWrapper>
        </BottomBar>
      )}
    </div>
  )
}

const Details: React.FC<{ data: OrderDb }> = ({ data }) => {
  const { items, location, date } = data
  const { city, state } = location

  return (
    <UIWrapper pad>
      <S.Grid>
        <div>
          <LargeHeading>Order for {data.user.first}</LargeHeading>
          <S.Details>
            {getTimeSince(new Date(date))} • {items.length} items
            <br />
            {city}, {state}
          </S.Details>
        </div>

        <S.ItemWrapper>
          {items.map((item, i) => (
            <S.ListItem key={item.text}>
              {item.text}
              {item.notes && <h5>&quot;{item.notes}&quot;</h5>}
            </S.ListItem>
          ))}
        </S.ItemWrapper>
      </S.Grid>
    </UIWrapper>
  )
}
export default OrderDetail

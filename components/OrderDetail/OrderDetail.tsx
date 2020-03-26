import GoogleMapReact from "google-map-react"
import { OrderDb } from "../../types"
import S from "./OrderDetail.Styled"

import { Map, UIButton } from ".."

const Marker: React.FC<{ lat: any; lng: any }> = ({ lat, lng }) => (
  <>
    <div />
    <style jsx scoped>
      {`
        div {
          width: 1rem;
          height: 1rem;
          background: green;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
      <S.BottomBar>
        <a href={`/orders/${data._id}/fulfill`}>
          <UIButton>Fulfill this order</UIButton>
        </a>
      </S.BottomBar>
    </div>
  )
}

const Details: React.FC<{ data: OrderDb }> = ({ data }) => {
  const { user, items, location } = data
  const { address, city, state, zip } = location
  return (
    <div>
      <S.Wrapper>
        <div>
          <S.Head>Order for {data.user.first}</S.Head>
          <div>{address}</div>
          <div>
            {city}, {state} {zip}
          </div>
        </div>
        <div>
          <S.ItemWrapper>
            {items.map(({ qty, name }) => (
              <S.Item>
                {name} • {qty}
              </S.Item>
            ))}
          </S.ItemWrapper>
        </div>
      </S.Wrapper>
    </div>
  )
}
export default OrderDetail

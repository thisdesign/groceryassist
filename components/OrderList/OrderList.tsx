import React from "react";
import GoogleMapReact from "google-map-react";
import { LineItem, MapMarker, ResultsHeader } from "..";
import { OrderRes } from "../../types";
import S from "./OrderList.Styled";

const GOOGLE_MAP_API_KEY = "AIzaSyBUPahFeC6Bucs95Ucc5Hf-QMO1S24nxfk";
const CENTER = { lat: 45.52796, lng: -122.6964283 };

const OrderList: React.FC<{ orders: OrderRes }> = ({ orders }) => {
  return (
    <S.OrderList>
      <div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          defaultCenter={CENTER}
          defaultZoom={12}
        >
          {orders.map(item => (
            <MapMarker
              lat={item.location.lat}
              lng={item.location.lng}
              key={item._id}
            />
          ))}
        </GoogleMapReact>
      </div>
      <div>
        <ResultsHeader data={orders} />
        {orders.map(order => (
          <LineItem data={order} key={order._id} />
        ))}
      </div>
    </S.OrderList>
  );
};

export default OrderList;

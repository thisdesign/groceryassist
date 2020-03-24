import GoogleMapReact from "google-map-react";
import { OrderDb } from "../../types";

const GOOGLE_MAP_API_KEY = "AIzaSyBUPahFeC6Bucs95Ucc5Hf-QMO1S24nxfk";

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
);

const OrderDetail: React.FC<{ data: OrderDb }> = ({ data }) => {
  const { user, location, items } = data;

  return (
    <div>
      <div>
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
            defaultCenter={{ lat: data.location.lat, lng: data.location.lng }}
            defaultZoom={15}
          >
            <Marker lat={data.location.lat} lng={data.location.lng} />
          </GoogleMapReact>
        </div>
        <br />
        <br />
        <h1>Order for {user.first}</h1>
        <h3>
          {location.address}
          <br />
          {location.city}, {location.state} {location.zip}
        </h3>
        <h4>{items.length} items</h4>
        <br />
      </div>
      <hr />
      {items.map(item => (
        <div key={item.name}>
          <h3>
            {item.name} · {item.qty}
            <hr />
          </h3>
        </div>
      ))}
      <br />
      <br />

      <h2>
        <a href={`/orders/${data._id}/fulfill`}>Fulfill this order→</a>
      </h2>
      <style jsx scoped>
        {`
          .map {
            height: 500px;
          }
        `}
      </style>
    </div>
  );
};

export default OrderDetail;

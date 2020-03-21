import { NextPage } from "next";
import GoogleMapReact from "google-map-react";
import { LineItem } from "../components";
import { OrderRes } from "../types";
import "isomorphic-unfetch";

const GOOGLE_MAP_API_KEY = "AIzaSyBUPahFeC6Bucs95Ucc5Hf-QMO1S24nxfk";

const CENTER = { lat: 45.52796, lng: -122.6964283 };

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

const Listings: NextPage<{ data: OrderRes }> = ({ data }) => {
  return (
    <div>
      <h1>{data.length} Open Orders</h1>
      <br />
      <br />
      <hr />
      <div className="split">
        <div>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
            defaultCenter={CENTER}
            defaultZoom={12}
          >
            {data.map(item => (
              <Marker
                lat={item.location.lat}
                lng={item.location.lng}
                key={item._id}
              />
            ))}
          </GoogleMapReact>
        </div>
        <div>
          {data.map(order => (
            <LineItem data={order} key={order._id} />
          ))}
        </div>
      </div>

      <style jsx scoped>
        {`
          .split {
            display: flex;
            grid-gap: 1rem;
            flex-direction: row-reverse;
            height: calc(100vh - 9rem);
          }

          .split > div {
            width: 50%;
          }
        `}
      </style>
    </div>
  );
};

Listings.getInitialProps = async () => {
  const data = await fetch("http://localhost:3000/api/orders").then(res =>
    res.json()
  );
  return { data };
};
export default Listings;

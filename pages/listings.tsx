import React, { useEffect, useRef } from "react";
import { ORDERS } from "../constants";
import { LineItem } from "../components";
import { NextPage } from "next";
import GoogleMapReact from "google-map-react";

const GOOGLE_MAP_API_KEY = "AIzaSyBUPahFeC6Bucs95Ucc5Hf-QMO1S24nxfk";

const CENTER = { lat: 45.52796, lng: -122.6964283 };

const Marker: React.FC<{ lat: any; lng: any }> = ({ lat, lng }) => (
  <>
    <div />
    <style jsx scoped>{`
      div {
        width: 1rem;
        height: 1rem;
        background: green;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
    `}</style>
  </>
);

const Listings: NextPage = () => {
  return (
    <div>
      <h1>{ORDERS.length} Open Orders</h1>
      <br />
      <br />
      <hr />
      <div className="split">
        <div>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
            defaultCenter={CENTER}
            defaultZoom={8}
          >
            <Marker lat={CENTER.lat} lng={CENTER.lng} />
          </GoogleMapReact>
        </div>
        <div>
          {ORDERS.map(order => (
            <LineItem data={order} key={order.id} />
          ))}
        </div>
      </div>

      <style jsx scoped>{`
        .split {
          display: flex;
          grid-gap: 1rem;
          flex-direction: row-reverse;
        }

        .split > div {
          width: 50%;
        }
      `}</style>
    </div>
  );
};

export default Listings;

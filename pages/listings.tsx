import React, { useEffect } from "react";
import { ORDERS } from "../constants";
import { LineItem } from "../components";
import { NextPage } from "next";

const Listings: NextPage = () => {
  return (
    <div>
      <h1>{ORDERS.length} Open Orders</h1>
      <br />
      <br />
      <hr />
      <div className="split">
        <div>
          <Map />
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

      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUPahFeC6Bucs95Ucc5Hf-QMO1S24nxfk"
        async
        defer
      ></script>
    </div>
  );
};

const Map = () => {
  useEffect(() => {
    const map = new (window as any).google.maps.Map(
      document.getElementById("map"),
      {
        center: { lat: 45.52796, lng: -122.6964283 },
        zoom: 12
      }
    );
  }, []);

  return (
    <>
      <div id="map">asdfasdf</div>
      <style>{`
        #map {
          height: calc(100vh - 12rem);
        }`}</style>
    </>
  );
};
export default Listings;

import React from "react";
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
        <div
          dangerouslySetInnerHTML={{
            __html: `
        <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="900px" id="gmap_canvas" src="https://maps.google.com/maps?q=portland%20oregon&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.net"></a></div><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div>`
          }}
        ></div>
        <div>
          {ORDERS.map(order => (
            <LineItem data={order} key={order.id} />
          ))}
        </div>
      </div>
      <br />
      <br />
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

import { NextPage } from "next";
import GoogleMapReact from "google-map-react";
import { OrderList, LineItem } from "../../components";
import { OrderRes } from "../../types";
import "isomorphic-unfetch";
import { getOrders } from "../../middleware";

const Listings: NextPage<{ data: OrderRes }> = ({ data }) => {
  return (
    <>
      <h1>{data.length} Open Orders</h1>
      <OrderList orders={data} />
    </>
  );
};

Listings.getInitialProps = async () => {
  const data = await getOrders();
  return { data };
};
export default Listings;

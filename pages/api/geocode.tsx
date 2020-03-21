import "isomorphic-unfetch";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { address } = req.query;

  if (!address || address === "") {
    res.status(400).json({ error: "Missing address" });
  }

  const data = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBUPahFeC6Bucs95Ucc5Hf-QMO1S24nxfk`
  ).then(response => response.json());

  const firstResult = data.results[0];
  if (firstResult) {
    const [
      number,
      street,
      region,
      city,
      cty,
      state,
      country,
      zip
    ] = firstResult.address_components;

    res.json({
      ...data.results[0].geometry.location,
      address: `${number.short_name} ${street.short_name}`,
      city: city.short_name,
      state: state.short_name,
      zip: zip.short_name
    });
  } else {
    res.json({ error: "bad request" });
  }
};

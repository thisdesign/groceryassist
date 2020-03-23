const getAddressData = async address => {
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

    return {
      ...data.results[0].geometry.location,
      address: `${number.short_name} ${street.short_name}`,
      city: city.short_name,
      state: state.short_name,
      zip: zip.short_name
    };
  }

  throw new Error("Request to geocode failed.");
};

module.exports = getAddressData;

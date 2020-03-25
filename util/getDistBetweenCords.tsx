const getDistBetweenCoords = (
  cord1: [number, number],
  cord2: [number, number]
) => {
  const [lat1, lng1] = cord1
  const [lat2, lng2] = cord2

  if (lat1 === lat2 && lng1 === lng2) {
    return 0
  }
  const radlat1 = (Math.PI * lat1) / 180
  const radlat2 = (Math.PI * lat2) / 180
  const theta = lng1 - lng2
  const radtheta = (Math.PI * theta) / 180

  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)

  if (dist > 1) {
    dist = 1
  }

  dist = Math.acos(dist)
  dist = (dist * 180) / Math.PI
  dist = dist * 60 * 1.1515

  return Math.round(dist * 10) / 10
}

export default getDistBetweenCoords

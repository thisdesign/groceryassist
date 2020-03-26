import { LocationRes } from "../types"

const formatLocation = (location: LocationRes) => {
  const { address, city, state, zip } = location
  return `${address}, ${city}, ${state} ${zip}`
}

export default formatLocation

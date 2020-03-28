export type Item = {
  name: string
  notes: null | string
}

export type Location = {
  address: string
  city: string
  state: string
  zip: number
}

export type latLng = {
  lat: number
  lng: number
}

export type Coords = [number, number]

export type LocationRes = latLng & Location

export type OrderUser = {
  first: string
  last: string
  phone: string
}

export type Status = {
  fulfilled: boolean
  date_fulfilled: null | Date
}

export type Order = {
  user: OrderUser
  items: Item[]
  location: Location
  status: Status
}

export type OrderDb = Order & {
  date: string
  _id: string
  location: LocationRes
}

export type GeoPrediction = {
  full: string
  main: string
  secondary: string
}

export type OrderRes = OrderDb[]

/**
 * User
 */

export type NewUserReq = {
  first: string
  last: string
  address: string
  phone: number
}

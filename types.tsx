export type Item = {
  qty: number
  name: string
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
export type LocationRes = latLng & Location

export type OrderUser = {
  first: string
  last: string
  phone: string
}

export type Order = {
  user: OrderUser
  items: Item[]
  location: Location
}

export type OrderDb = Order & {
  date: string
  _id: string
  location: LocationRes
}

export type OrderRes = OrderDb[]

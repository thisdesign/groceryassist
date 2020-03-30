export type Item = {
  text: string
  notes?: string
}

export type Location = {
  address?: "4022 N Albina Ave"
  street_number?: "4022"
  route?: "N Albina Ave"
  neighborhood?: "North Portland"
  city?: "Portland"
  county?: "Multnomah County"
  state?: "OR"
  country?: "US"
  zip?: "97227"
  zip_suffix?: "1210"
}
export type JSONGeo = {
  type: "Point"
  coordinates: [number, number]
}

export type Coords = [number, number]

export type LocationRes = { lat: number; lng: number } & Location

export type OrderUser = {
  first: string
  last: string
  phone: string
}

export type Status = {
  fulfilled: boolean
  date_fulfilled: null | Date
}

export type NewOrderBody = {
  first: string
  last: string
  address: string
  phone: string
  age: string
  additionalNotes?: any
  items: Item[]
  mobile: string
  city: string
  state: string
  zip: string
  apt: string
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
  location: Location & JSONGeo
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

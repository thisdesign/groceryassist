export type Item = {
  qty: number;
  name: string;
};

export type Location = {
  address: string;
  city: string;
  state: string;
  zip: number;
};

export type LocationRes = {
  lat: number;
  lng: number;
} & Location;

export type Order = {
  date?: string;
  first: string;
  last: string;
  items: Item[];
  location: Location;
};

export type OrderDb = Order & {
  _id: string;
  location: LocationRes;
};

export type OrderRes = OrderDb[];

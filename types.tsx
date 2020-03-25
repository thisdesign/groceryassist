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

export type OrderUser = {
  first: string;
  last: string;
  phone: string;
};

export type Order = {
  date: string;
  user: OrderUser;
  items: Item[];
  location: Location;
};

export type OrderDb = Order & {
  _id: string;
  location: LocationRes;
};

export type OrderRes = OrderDb[];

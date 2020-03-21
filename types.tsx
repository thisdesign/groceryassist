export type Item = {
  qty: string;
  name: string;
};

export type Location = {
  lat: number;
  lng: number;
  address: string;
  city: string;
  state: string;
  zip: number;
};

export type Order = {
  _id: string;
  date: string;
  name: string;
  location: Location;
  items: [];
};

export type OrderRes = Order[];

type Item = {
  name: string;
  count: number;
  unit?: string;
};

export type Order = {
  id: number;
  userId: number;
  items: Item[];
};

type User = {
  id: number;
  name: string;
  address: string;
};

// data

export const USERS: User[] = [
  {
    name: "Adam Bagerski",
    id: 56789876,
    address: "4022 n albina ave portland or 97227"
  },
  {
    name: "Maya Massad",
    id: 56789877,
    address: "4231 n interstate ave portland or 97217"
  }
];

export const ORDERS: Order[] = [
  {
    id: 567890,
    userId: 56789876,
    items: [
      {
        name: "toilet paper",
        count: 3,
        unit: "pack"
      },
      {
        name: "onion",
        count: 3
      }
    ]
  },
  {
    userId: 56789877,
    id: 23434534,
    items: [
      {
        name: "Hand Sanitizer",
        count: 3
      },
      {
        name: "Eggs",
        count: 1,
        unit: "dozen"
      },
      {
        name: "Tomato sauce",
        count: 1
      },
      {
        name: "Mustard",
        count: 1
      },
      {
        name: "Salsa",
        count: 1,
        unit: "jar"
      },
      {
        name: "Instant Oatmeal",
        count: 1,
        unit: "box"
      }
    ]
  }
];

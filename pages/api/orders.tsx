import Order from "../../models/order";
import initDb from "../../util/initDb";

export default async (req, res) => {
  initDb();
  // const orders = await Order.find({});

  console.log(await Order.find({}));

  res.json({ Order });
};

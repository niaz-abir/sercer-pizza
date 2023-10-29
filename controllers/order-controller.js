import Order from "../models/Order.js";

export const createOrders = async (req, res) => {
  try {
    console.log(req.body);
    const order = await Order.create(req.body);

    if (order) {
      return res.status(200).json(order);
    }

    res.status(404).json({ message: "no order found" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const orders = await Order.find({ email });

    if (orders) {
      return res.status(200).json(orders);
    }

    res.status(404).json({ message: "no order found" });
  } catch (error) {
    res.status(500).json(error);
  }
};

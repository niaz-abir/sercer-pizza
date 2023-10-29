import Cart from "../models/Cart.js";

export const getCartByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const cart = await Cart.findOne({ email });

    if (cart) {
      return res.status(200).json(cart);
    }

    res.status(404).json({ message: "no cart found" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCartByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const { products } = req.body;

    const cart = await Cart.updateOne(
      { email },
      { $set: { email, products } },
      { upsert: true }
    );

    if (cart.acknowledged) {
      return res.status(201).json(cart);
    }

    res.status(404).json({ message: "no cart found" });
  } catch (error) {
    res.status(500).json(error);
  }
};

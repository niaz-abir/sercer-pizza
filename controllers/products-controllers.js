import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    if (products) {
      return res.status(200).json(products);
    }

    res.status(404).json({ message: "no products found" });
  } catch (error) {
    res.status(500).json(error);
  }
};

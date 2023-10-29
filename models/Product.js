import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  type: String,
  price: Number,
  discount: Number,
});

export default mongoose.model("Product", productSchema);

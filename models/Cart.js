import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  email: String,
  products: [{}],
});

export default mongoose.model("Cart", cartSchema);

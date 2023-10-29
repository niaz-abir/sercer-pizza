import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  email: String,
  address: String,
  mobile: String,
  amount: String,
  date: Date,
});

export default mongoose.model("order", orderSchema);

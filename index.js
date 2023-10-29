import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import productsRoutes from "../server/routes/products-routes.js";
import cartRoutes from "../server/routes/cart-routes.js";
import orderRoutes from "../server/routes/order-route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const uri = process.env.DB_URI;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/products", productsRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);

mongoose
  .connect(uri, {
    dbName: "pizzazz",
  })
  .then(
    app.listen(port, () => {
      console.log(`[server] running on http://localhost:${port}/`);
    })
  )
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

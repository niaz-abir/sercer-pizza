import { Router } from "express";
import {
  createOrders,
  getOrderByEmail,
} from "../controllers/order-controller.js";

const router = Router();

router.post("/", createOrders);
router.get("/:email", getOrderByEmail);

export default router;

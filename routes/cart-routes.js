import { Router } from "express";
import {
  getCartByEmail,
  updateCartByEmail,
} from "../controllers/cart-controllers.js";

const router = Router();

router.get("/:email", getCartByEmail);
router.put("/:email", updateCartByEmail);

export default router;

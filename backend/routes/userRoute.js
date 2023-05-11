const express = require("express");
const router = express.Router();

import { getAllProducts } from "../controllers/productController";

router("api/products").get(getAllProducts);

export default router;

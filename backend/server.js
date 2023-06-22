import express, { json } from "express";
const app = express();
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import connectDB from "./database/connectDB.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use(cors());
app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on Port: ${PORT}`));

export default app;

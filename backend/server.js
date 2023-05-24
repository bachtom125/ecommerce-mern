import express, { json } from "express";
const app = express();
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import connectDB from "./database/connectDB.js";
import productRoutes from "./routes/productRoutes.js";

app.use(express.json());
connectDB();

app.use(cors());
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on Port: ${PORT}`));

export default app;

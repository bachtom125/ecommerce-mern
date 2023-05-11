import express, { json } from "express";
const app = express();
import path from "path";
import mongoose from "mongoose";
import connectDB from "./database/connectDB.js";

// middleware
app.use(json());

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on Port: ${PORT}`));

export default app;

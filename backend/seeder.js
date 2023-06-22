import products from "./sample-data/productsData.js";
import connectDB from "./database/connectDB.js";
import Product from "./models/productModel.js";
import mongoose from "mongoose";
import users from "./sample-data/usersData.js";
import User from "./models/userModel.js";

connectDB();

// upload sample data to database
const uploadData = async () => {
  try {
    await Product.insertMany(products);
    console.log("Products have been Uploaded to Database!");

    await User.insertMany(users);
    console.log("Users have been Uploaded to Database!");

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log("Products have been Deleted!");

    await User.deleteMany();
    console.log("Users have been Deleted!");

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] == "-delete") deleteData();
else uploadData();

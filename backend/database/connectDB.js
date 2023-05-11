import mongoose from "mongoose";

// config mongoose
const uri =
  "mongodb+srv://bachtom125:bachTOM2002@students.fh1rnrq.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
    });
    console.log(`MongoDB connected ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

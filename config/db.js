import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const data = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected with server: ${data.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDatabase;

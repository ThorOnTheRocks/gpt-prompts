import mongoose, { mongo } from 'mongoose';

let isConnected = false; // track datavase connection

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if(isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "gpt_prompts",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
}

export default connectToDB;
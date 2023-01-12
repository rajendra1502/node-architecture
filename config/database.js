import mongoose from "mongoose";
const {MONGO_URI}  = process.env;

export const connect = async () => {
  // Connecting to the database
  mongoose.set('strictQuery', false);
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database", MONGO_URI);
      return 1
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...", MONGO_URI);
      console.error('...Mongo Error...', error);
      process.exit(1);
    });
};
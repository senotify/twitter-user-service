import mongoose from "mongoose";
import env from "./env";

mongoose
  .connect(env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

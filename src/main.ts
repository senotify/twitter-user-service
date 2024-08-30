import express from "express";
import dotenv from "dotenv";
import { userRoutes } from "./routes/user.routes";
import { middleWareCheckorigin } from "./middleware/user.middleware";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());

app.use(middleWareCheckorigin);
app.use(cookieParser());
app.use("/user", userRoutes);

app.listen(8010, () => {
  console.log("Listening on port 8010");
});

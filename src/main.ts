import express from "express";
import { userRoutes } from "./routes/user.routes";
import { middleWareCheckorigin } from "./middleware/user.middleware";
import cookieParser from "cookie-parser";
import mongodb from "./utils/mongodb";

const app = express();

app.use(express.json());

app.use(middleWareCheckorigin);
app.use(cookieParser());
app.use("/user", userRoutes);

mongodb.init()

app.listen(8010, () => {
  console.log("Listening on port 8010");
});

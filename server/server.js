import express from "express";
import userRouter from "./routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";

const app = express();

//databse
connectDB();

//routes
app.use("/api/v1", userRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

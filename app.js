import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import livreRoutes from "./routes/LivreRoute.js";
import AuthRoutes from "./routes/AuthRoute.js";
import CategoryRoutes from "./routes/CategoryRoute.js";
import eventRoutes from "./routes/EventRoute.js";
const app = express();

mongoose
  .connect("mongodb://localhost:27017/DB")
  .then(function () {
    console.log("Connected");
  })
  .catch(function (e) {
    console.log("Error");
  });

app.use(cors());
app.use(express.json());

app.use("/v1/api", livreRoutes);
app.use("/v1/api", AuthRoutes);
app.use("/v1/api", CategoryRoutes);
app.use("/v1/api", eventRoutes);

export default app;

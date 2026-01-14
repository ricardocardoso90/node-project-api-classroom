import express from "express";
import { middleware } from "./middlewares/middleware.js";

const app = express();
app.use(express.json());

app.post("/products", middleware, (req, res) => {
  const { name, idade } = req.body;

  console.log({ name, idade });
  return res.json({ name, idade });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
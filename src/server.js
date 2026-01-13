import express from "express";

const app = express();
app.use(express.json());

app.post("/products", (req, res) => {
  const { name, idade } = req.body;

  return res.json({ name, idade, });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
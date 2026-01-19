import express from "express";

const app = express();
app.use(express.json());

const Routes = require('./routes/Routes');

app.use('/products', Routes);

app.listen(3000, () => {
  console.log("Server está rodando na porta 3000");
});
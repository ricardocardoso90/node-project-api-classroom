import express from "express";

const app = express();
app.use(express.json());

import Routes from "./routes/Routes.js";
import { middlewareError } from "./middlewares/middleware.js";

app.use('/products', Routes);

// 🚫 ROTA 404
app.use(middlewareError);

app.listen(3000, () => {
  console.log("Server está rodando na porta 3000");
});
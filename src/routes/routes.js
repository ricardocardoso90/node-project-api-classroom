import { middleware } from "../middlewares/middleware";

export const routes = [
  {
    method: "GET",
    path: "/products",
    middleware: [middleware],
    controller: (req, res) => {
      const { name, idade } = req.body;

      console.log("Resposta GET: " + { name, idade });
      return res.json({ name, idade });
    }
  },

  {
    method: "POST",
    path: "/products",
    middleware: [middleware],
    controller: (req, res) => {
      const { name, idade } = req.body;

      console.log("Resposta POST: " + { name, idade });
      return res.json({ name, idade });
    }
  }
]
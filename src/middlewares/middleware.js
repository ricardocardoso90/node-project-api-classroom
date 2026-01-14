export async function middleware(req, res, next) {
  if (req.method === "GET" && req.path === "/products/1") {
    return res.status(405).json({ error: "Método não permitido" });
  };

  next();
};
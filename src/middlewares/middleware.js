export async function middlewareError(req, res) {
  return res.status(404).json({
    method: req.method,
    path: req.originalUrl,
    error: "Rota não encontrada",
  });
};
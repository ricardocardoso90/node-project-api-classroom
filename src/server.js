import http from "http";



const server = http.createServer((req, res) => {
  return res.end("Método HTTP: " + req.method);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
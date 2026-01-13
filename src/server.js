import http from "http";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Método HTTP: " + req.method);
});

// const server = http.createServer((req, res) => {
//   return res.end("Método HTTP: " + req.method);
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
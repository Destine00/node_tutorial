const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the home page");
  }
  if (req.url === "/about") {
    res.end("About us...");
  }
  res.end("404 Not Found!");
  console.log(req);
});

server.listen(4000);

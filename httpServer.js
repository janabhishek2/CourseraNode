const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello");
  res.end();
});

server.listen(3124, () => {
  console.log("Listening on 3000...");
});

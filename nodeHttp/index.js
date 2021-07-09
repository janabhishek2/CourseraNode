const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.headers);

  res.write("Hello");
  res.end();
});

server.listen(3000, () => {
  console.log("Listening on 3000...");
});

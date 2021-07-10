const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(req.method);

  if (req.method == "GET") {
    let fileUrl;
    if (req.url == "/") fileUrl = "/index.html";
    else fileUrl = req.url;

    let filePath = path.resolve("./public" + fileUrl);
    console.log("Absolute file path : ", filePath);

    const fileExt = path.extname(filePath);
    const notFoundFilePath = path.resolve("./public/notfound.html");

    if (fileExt == ".html") {
      fs.exists(filePath, (exists) => {
        if (!exists) {
          res.statusCode = 404;
          console.log(notFoundFilePath);
          fs.createReadStream(notFoundFilePath).pipe(res);
        } else {
          res.statusCode = 200;
          fs.createReadStream(filePath).pipe(res);
          return;
        }
      });
    } else {
      res.statusCode = 404;
      res.write("Not found");
      res.end();
    }
  }
});

server.listen(3000, () => {
  console.log("Listening on 3000...");
});

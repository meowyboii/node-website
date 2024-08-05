const http = require("http");
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
  let filePath = __dirname + "/";

  switch (req.url) {
    case "/":
      filePath += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      filePath += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      filePath = "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      filePath = "404.html";
      res.statusCode = 404;
  }

  res.setHeader("Content-Type", "Text/html");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Listening at port localhost:${port}`);
});

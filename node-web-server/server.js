const http = require("http");

const requestListener = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Powered-By", "NodeJS");

  const { method, url } = req;

  if (url === "/") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          message: "<h1> Ini adalah homepage </h1>",
        })
      );
    } else {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          message: `<h1> Halaman tidak dapat diakses dengan ${method} request method </h1>`,
        })
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end(
        JSON.stringify({ message: "<h1> Ini adalah halaman about </h1>" })
      );
    } else if (method === "POST") {
      console.log("cek\n");
      let body = [];

      req.on("data", (chunk) => {
        body.push(chunk);
      });

      req.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        res.statusCode = 200;
        res.end(
          JSON.stringify({
            message: `<h1> Hai, ${name}! ini adalah halaman about </h1>`,
          })
        );
      });
    } else {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          message: `<h1> Halaman tidak dapat diakses dengan ${method} request method </h1>`,
        })
      );
    }
  } else {
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        message: "Halaman tidak ditemukan!",
      })
    );
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});

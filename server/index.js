const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Menangani permintaan untuk halaman utama
  if (req.url === "/" || req.url === "/index.html") {
    fs.readFile(path.join(__dirname, "../public/index.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
  // Menangani permintaan untuk halaman "car.html"
  else if (req.url === "/cars.html") {
    fs.readFile(path.join(__dirname, "../public/cars.html"), (err, data) => {
      if (err) {
        console.error("Error reading cars.html:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }

  // Menangani permintaan untuk file CSS atau JavaScript lainnya
  else if (req.url.match(/\.(css|js)$/)) {
    const contentType = req.url.endsWith(".css") ? "text/css" : "text/javascript";
    // console.log(contentType);
    fs.readFile(path.join(__dirname, "../public", req.url), (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    });
  }
  // Menangani permintaan untuk file gambar
  else if (req.url.match(/\.(jpg|jpeg|png|gif)$/)) {
    const ext = path.extname(req.url);
    const contentType = `image/${ext.slice(1)}`; // Menentukan tipe konten berdasarkan ekstensi gambar
    // console.log(contentType);
    fs.readFile(path.join(__dirname, "../public", req.url), (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      }
    });
  }

  // Menangani permintaan lainnya
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log("Server is listening on port http://localhost:%d", PORT);
});

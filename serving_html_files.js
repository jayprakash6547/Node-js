const http = require("http");
const fs = require("fs");
const fileContent = fs.readFileSync("1.html");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(fileContent);
});
// I am given port 80 because when i run this code then i only write 127.0.0.1 then server is started easily
server.listen(80, "127.0.0.1", () => {
  console.log("Listening on port 80");
});

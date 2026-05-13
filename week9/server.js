const http = require("http");
const os = require("os");
const path = require("path");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on("request_received", (url) => {
  console.log(`Event Triggered: Request received for ${url}`);});
const server = http.createServer((req, res) => {
  eventEmitter.emit("request_received", req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  if (req.url === "/") {
    res.end(JSON.stringify({ message: "Welcome to Custom Node Server" }));  }
  else if (req.url === "/os") {
    res.end(JSON.stringify({
      platform: os.platform(),
      cpu_arch: os.arch(),
      cpus: os.cpus().length,
      free_memory: os.freemem(),
      total_memory: os.totalmem(),
      uptime: os.uptime()   }));  }
  else if (req.url === "/path") {
    const filePath = path.join(__dirname, "files", "demo.txt");
    res.end(JSON.stringify({
      joined_path: filePath,
      dirname: __dirname,
      ext: path.extname(filePath),
      basename: path.basename(filePath)    }));  }
  else if (req.url === "/event") {
    eventEmitter.emit("custom_event", "Hello Event!");
    eventEmitter.once("custom_event", (msg) => {
      console.log("Custom Event Fired:", msg);    });
    res.end(JSON.stringify({ message: "Custom event triggered" }));  }
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route not found" }));  }});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);});
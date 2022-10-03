const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("hello from other sides");
    } else if (req.url == "/about") {
        res.end("hello from about sides");
    } else if (req.url == "/contact") {
        res.end("hello from contact sides");
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("404 error page");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listen the port number");
});
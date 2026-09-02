const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        const parsedUrl = url.parse(req.url, true);

        res.writeHead(200, { "Content-Type": "text/html" });

        res.write("<h2>URL Processing</h2>");
        res.write("<p>Path: " + parsedUrl.pathname + "</p>");

        res.write("<h2>Query String</h2>");
        res.write("<p>Name: " + parsedUrl.query.name + "</p>");
        res.write("<p>Age: " + parsedUrl.query.age + "</p>");

        res.end();
    }

    else if (req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const formData = querystring.parse(body);

            res.writeHead(200, { "Content-Type": "text/html" });

            res.write("<h2>Form Parameters</h2>");
            res.write("<p>Name: " + formData.name + "</p>");
            res.write("<p>Email: " + formData.email + "</p>");

            res.end();
        });
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

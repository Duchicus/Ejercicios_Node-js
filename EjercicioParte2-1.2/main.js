let http = require("http");
let fs = require("fs")
let url = require("url")

http.createServer((req, res) =>{
    const q = url.parse(req.url, true)
    const filename = "." + q.pathname
        fs.readFile(filename,(err, data) => {
            if(err){
                res.writeHead(404, { "Content-Type": "text/html" });
                console.error(err);
                return res.end("404 Not Found");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write((data));
            return res.end();
        })
  })
  .listen(8080);
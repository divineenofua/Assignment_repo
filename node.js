const http = require("http");
const fs = require("fs");
const path = require("path");
// fs.writeFile('myFile.text', "hi Divine", (err) => {
//     if (err) throw err;
//     console.log("succesful");
// })
// fs.unlink('myFile.text', (err) => {
//     if (err) throw err;
//     console.log('deleted');
// })



http.createServer((req, res) => {
    if(req.url === "/"){
    fs.readFile("index.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });
}
    if(req.url === "/about"){
        fs.readFile(about.html,  (err, data) => {
            if (err) throw err;
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });
}
     if(req.url === "/contact"){
        fs.readFile(contact.html,  (err, data) => {
            if (err) throw err;
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });
     }
}).listen(3000);
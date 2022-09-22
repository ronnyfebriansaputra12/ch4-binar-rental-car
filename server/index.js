// const http = require('http');
// const { PORT = 8000 } = process.env;

// const fs = require('fs');
// const path = require('path');
// const PUBLIC_DIRECTORY = path.join(process.cwd(),'public');

// function getHTML(htmlFileName) {
//     const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
//     return fs.readFileSync(htmlFilePath, 'utf-8')
// }

// function onRequest(req, res) {

//     switch (req.url) {
//         case "/":
//             res.writeHead(200)
//             res.url('index.html')
//             return;
//         case "/search":
//             res.writeHead(200)
//             res.url('index.example.html')
//             return;
//         default:
//             res.writeHead(404)
//             res.end(getHTML("404.html"))
//             return;
//     }
        
//     let path = "public/" + req.url;
//     fs.readFile(path, (err, data) => {
//       res.writeHead(200);
//       res.end(data);
//     })

// }


// const server = http.createServer(onRequest);

// server.listen(PORT, 'localhost', () => {
//     console.log("Server Sudah Berjalan");
// });



////////////////////////////
const http = require('http');
const fs = require('fs');

const port = 8000;

function onRequest(req, res) {
    switch (req.url) {
      case '/':
        res.writeHead(200)
        req.url = "index.html";
        break;
      case '/search':
        res.writeHead(200)
        req.url = "index.example.html";
        break;
    }
    
    let path = "public/" + req.url;
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    })
  }
    const server = http.createServer(onRequest);

    server.listen(port, 'localhost', () => {
        console.log("Server Sudah Berjalan");
    });

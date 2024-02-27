import http from "http";
import fs from "fs";
import path from "path";

const hostname = '172.16.0.231';
const port = 3320;
const rootDirectory = './www/';


const server = http.createServer((req, res) => {
    let filePath = path.join(rootDirectory, req.url);
    if (req.url === '/') {
        filePath = path.join(rootDirectory, 'index.html');
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found!');
            } else {
                res.writeHead(500);
                res.end('Server error');
            }
        } else {
            let contentType = 'text/html';
            const extname = path.extname(filePath);
            switch (extname) {
                case '.html':
                    contentType = 'text/html';
                    break;
                case '.css':
                    contentType = 'text/css';
                    break;
                case '.js':
                    contentType = 'application/javascript';
                    break;
                case '.json':
                    contentType = 'application/json';
                    break;
                case '.png':
                    contentType = 'image/png';
                    break;
                case '.jpg':
                case '.jpeg':
                    contentType = 'image/jpeg';
                    break;
                case '.gif':
                    contentType = 'image/gif';
                    break;
                // Agrega más casos para otros tipos de archivos si es necesario
                default:
                    break;
            }
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

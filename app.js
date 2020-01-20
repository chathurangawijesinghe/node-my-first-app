const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>The "Add Product" Page!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hellp from Express!</h1>');
});

app.listen(3000);

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((request, response) => {
//     const url = request.url;
//     const method = request.method;
    
//     if (url === '/') {
//         response.setHeader('Content-Type', 'text/html');
//         response.write('<html>');
//         response.write('<head><title>My First Page</title></head>');
//         response.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
//         response.write('</html>');
//         return response.end();
//     }

//     if (url === '/message' && method === 'POST') {
//         const body = [];
//         request.on('data', (chunk) => {
//             console.log(chunk);
//             body.push(chunk);
//         });

//         request.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split("=")[1];
//             fs.writeFileSync('message.text', message, err => {
//                 response.statusCode = 302;
//                 response.setHeader('Location', '/');
//                 return response.end();
//             });
//         });
//     }
    
//     response.setHeader('Content-Type', 'text/html');
//     response.write('<html>');
//     response.write('<head><title>My First Page</title></head>');
//     response.write('<body><h1>Hello from my Node.JS Server!</h1></body>');
//     response.write('</html>');
//     response.end();
// });

// server.listen(3000);
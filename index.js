const http = require('http');
const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;
const Router = require('./framework/Router');

const emitter = new EventEmitter();

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-type': 'text/html; charset=utf-8'
//     })
//     res.end('<p>The server is running !!!</p><h1>Hello, world!</h1');
// });

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'application/json'
//     })
//     if (req.url === '/users') {
//         return res.end(JSON.stringify([{
//             id: 1,
//             name: 'Ulbi TV'
//         }]))
//     }
//     if (req.url === '/posts') {
//         return res.end('POSTS')
//     }
//     res.end(req.url);
// });

// server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));


//-----------------------------------------------------------------------------


// class Router {
//     constructor () {
//         this.endpoints = {
//             // '/users': {
//             //     'GET': handler1,
//             //     'POST': handler2,
//             //     'DELETE': handler3
//             // }
//         } 
//     }

//     request (method = "GET", path, handler) {
//         if (!this.endpoints[path]) {
//             this.endpoints[path] = {}
//         }
//         // /users [GET, POST, PUT] /posts [GET, POST, PUT, DELETE]
//         const endpoint = this.endpoints[path];

//         if (endpoint[method]) {
//             throw new Error(`[${method}] by address ${path} already exists`)
//         }

//         endpoint[method] = handler;
//         emitter.on(`[${path}]:[${method}]`, (req, res) => {
//             handler(req, res);
//         });
//     }

//     get (path, handler) {
//         this.request('GET', path, handler);
//     }

//     post (path, handler) {
//         this.request('POST', path, handler);
//     }

//     put (path, handler) {
//         this.request('PUT', path, handler);
//     }

//     delete (path, handler) {
//         this.request('DELETE', path, handler);
//     }
// }

const router = new Router();

router.get('/users', (req, res) => {
    res.end('YOU SEND REQUEST TO /USERS');
});

router.get('/posts', (req, res) => {
    res.end('YOU SEND REQUEST TO /POSTS');
});

// const server = http.createServer((req, res) => {
//     const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
//     if (!emitted) {
//         res.end();
//     }
// });

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

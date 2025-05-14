const http = require('http');
const EventEmitter = require('events');

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer();
    }

    _createServer() {
        return http.createServer((req, res) => {
            const emitted = this.emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
            if (!emitted) {
                res.end();
            }
        });
    }

    _getRouteMask(path, method) {
        return `[${path}]:[${method}]`;
    }
};
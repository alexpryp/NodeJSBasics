const EventEmitter = require('events');

const emitter = new EventEmitter();

class Logger extends EventEmitter {
    log = (msg) => {
        console.log(msg);
        this.emit('some event', {id: 1, text: 'Event test text!'})
    }
};

module.exports = Logger;
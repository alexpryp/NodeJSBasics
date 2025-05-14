const os = require('os');
const cluster = require('cluster');

// console.log(`Platform: ${os.platform()}`);
// console.log(`Architecture: ${os.arch()}`);
// //console.log(`Core processors units: `, os.cpus());
// console.log(`Number of CPU cores: ${os.cpus().length}`);

if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker) => {
        console.log(`Worker with pid = ${worker.process.pid} is dead`);
        cluster.fork();
    })
} else {
    console.log(`Worker with pid = ${process.pid} started`);

    setInterval(() => {
        console.log(`Worker with pid = ${process.pid} still works`)
    }, 5000);
}

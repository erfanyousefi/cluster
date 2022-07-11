const cluster = require("cluster");
const os = require("os");
if (cluster.isMaster) {
    for (let index = 0; index < os.cpus().length; index++) {
        cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {
        cluster.fork()
    })
} else {
    require("./app")
}
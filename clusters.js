const express = require('express');
// const cluster = require('cluster');
const crypto = require('crypto');

const port = 9090;

// Processed in event loop which blocks any other request
function doWork(cb) {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', cb);
}

function setupRoutes(server) {
  server.get('/', (req, res) => {
    doWork(() => res.send('done'));
  });
  server.get('/fast', (req, res) => {
    res.send('no problem');
  });
}

async function start(server) {
  try {
    await server.listen(port);
    console.log(`Listening on port ${port}`);
  } catch (e) {
    console.error(`Failed to start the server ${e}`);
  }
}

// if (cluster.isMaster) {
//   cluster.fork();
// } else {
//   const app = express();
//   setupRoutes(app);
//   start(app);
// }

const app = express();
setupRoutes(app);
start(app);

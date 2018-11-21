process.env.UV_THREADPOOL_SIZE = 1;

const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
  https
    .request('https://google.com', res => {
      res.on('data', () => {});
      res.on('end', () => console.log(`request ${Date.now() - start}`));
    })
    .end();
}

function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => console.log(`hash ${Date.now() - start}`));
}

doRequest();
fs.readFile('threads.js', 'utf8', () => console.log(`fs ${Date.now() - start}`));
doHash();
doHash();
doHash();
doHash();


// Output on MacBook Pro (15-inch, 2016)
// request 155
// hash 1190
// fs 1191
// hash 1206
// hash 1210
// hash 1214


/*
  The request does not go through the thread pool so it is by it self executed whenever
  The fs requiers two async operations from the OS, once the first one is requested,
  that thread picks up the hashing task and worsk on it
  When a thread is free, it picks up the remaining fs task
 */


// But if we set the thread pool size to 5, then everything has its own thread.catch(➜  doodles node threads.js
// fs 40
// request 158
// hash 1160
// hash 1161
// hash 1169
// hash 1171

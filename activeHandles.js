const { promisify } = require('util');
const crypto = require('crypto');

async function doSomething() {
  console.log('started doing something');
  console.log(process._getActiveHandles());
  await promisify(crypto.pbkdf2)('a', 'b', 100000, 512, 'sha512');
  console.log('done doing something');
}

doSomething();

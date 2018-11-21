const sleepOne = ms => new Promise(r => setTimeout(() => { console.log('1'); r(); }, ms));
const sleepTwo = ms => new Promise(r => setTimeout(() => { console.log('2'); r(); }, ms));
const promises = [
  sleepOne(1000),
  sleepTwo(100),
];

async function main() {
  for await (const x of promises) {
    console.log(x);
  }
}

main();

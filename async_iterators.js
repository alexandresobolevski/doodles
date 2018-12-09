const sleepOne = ms => new Promise(r => setTimeout(() => r(1), ms));
const sleepTwo = ms => new Promise(r => setTimeout(() => r(2), ms));
const promises = [
  sleepOne(10000),
  sleepTwo(100),
];

async function main() {
  for await (const x of promises) {
    console.log(x);
  }
}

main();

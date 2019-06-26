// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const promise1 = new Promise((resolve, reject) => {
    const start = Date.now();
    setInterval(() => {
      resolve(Date.now() - start);
    }, time);
  });
  return promise1;
}

delay(500).then(delayedTime => console.log(delayedTime))

export function asyncDelay() {

}

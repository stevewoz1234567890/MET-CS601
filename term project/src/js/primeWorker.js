/* eslint-disable no-restricted-globals */
// Worker script to calculate prime numbers
self.onmessage = function (event) {
    const max = event.data;
    const primes = [];
    for (let i = 2; i <= max; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    self.postMessage(primes);
  };
  
  function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  
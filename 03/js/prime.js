const n = parseInt(prompt("정수를 입력하세요"));
let isPrime = "Prime";

for (let i = 2; i < n; i++)
    if (!(n % i)) isPrime = "Not Prime";

document.write(`${n} is ${isPrime}`);
let sum = 0;
let n = parseInt(prompt("정수를 입력하세요"));

if (n > 1 && n !== null){
    for (let i = 1; i <= n; i++)
        if (i % 2 == 0){
            sum += i;
            document.write(`${i} ----- ${sum}<br>`);
        }
}


/* 문제 이해 잘 못 한 버전
let i, sum = 0;

while(true){
    i = parseInt(prompt("정수를 입력하세요"));
    if (!i) break;
    if (i % 2 == 0){
        sum += i;
        document.write(`${i} ----- ${sum}<br>`);
    }
}*/
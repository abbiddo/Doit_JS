let F = parseFloat(prompt("화씨온도를 입력하세요"));
let C;

C = ((F - 32) / 1.8).toFixed(1);
alert(`화씨${F}도는 섭씨${C}도입니다.`);
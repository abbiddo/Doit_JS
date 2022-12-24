let inch = parseFloat(prompt("인치를 입력하세요"));
let cm;

cm = (inch * 2.54).toFixed(2);
alert(`${inch}인치 = ${cm}센티미터`);
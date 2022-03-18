const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

var count = 0; // 몇 번째 입력인지 기록
var N = 0; // 첫 번째 줄에 입력된 N
var input = [];

rl.on("line", function (x) {
  count += 1; // 입력 횟수가 증가
  if (count === 1) {
    // 첫 번째 입력인 경우 앞으로 주어질 입력 개수 기록
    N = x;
  } else {
    // 이후 입력되는 N개의 입력은 배열에 저장
    input.push(x);
  }
  if (count > N) {
    // N번 입력을 받은 뒤 종료
    rl.close();
  }
}).on("close", function () {
  // 입력 종료 후 동작할 코드
  console.log(input);
});
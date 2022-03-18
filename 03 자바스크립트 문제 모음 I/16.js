// N줄에 걸쳐 주어지는 문자를 문자열로 만들어 출력하세요.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var count = 0;
var N = 0;
var input = [];

rl.on("line", function (x) {
    count += 1;
    if (count === 1) {
    N = x;
  } else {
    input.push(x);
  }
  if (count > N) {
    console.log(input.join(''));
    rl.close();
  }
}).on("close", function () {
  process.exit();
});
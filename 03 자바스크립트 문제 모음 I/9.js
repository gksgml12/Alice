// 여러 입력을 받도록 코드를 작성하세요.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
    input = line.split(' ');
    for (var i=0;i<input.length;i++) {
        console.log(input[i]);
    }
  rl.close();
}).on("close", function () {

});
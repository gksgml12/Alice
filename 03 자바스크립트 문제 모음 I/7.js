// fruits 배열을 만들어 과일들을 입력받고, fruits 배열에서 콩과 무를 제거하세요.
// 과일이 아닌 것을 잘 제거했는지 console.log를 통해 배열을 출력해 확인해봅니다.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    var fruits=line.split(" ");
    fruits=fruits.filter((element) => element !== '콩' && element !== '무');
    console.log(fruits);
  rl.close(); // close가 없으면 입력을 무한히 받는다.
});

rl.on('close', () => {
// 입력이 끝난 후 실행할 코드
})
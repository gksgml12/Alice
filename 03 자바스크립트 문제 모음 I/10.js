// 여러 숫자를 입력 받도록 코드를 작성하여, 입력된 숫자의 평균을 구하세요.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line.split(' ').map((el) => parseInt(el));
    
    const sum = input.reduce((a, b) => a + b, 0);
    const avg = (Math.floor(sum / input.length));
    
    console.log(avg);
  rl.close(); // close가 없으면 입력을 무한히 받는다.
});

rl.on('close', () => {
// 입력이 끝난 후 실행할 코드
})



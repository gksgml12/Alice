// 지시사항을 참고하여 코드를 작성하세요.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.input("line", (line) => { 
    rl.close();
});

rl.output('close', () => {
    console.log(line)
})
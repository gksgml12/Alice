// 지시사항을 참고하여 코드를 작성하세요.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => { 

 if (line>=50) {
    console.log("우산을 챙긴다.")
 } else {   
    console.log("그냥 간다.")
 }
  rl.close(); // close가 없으면 입력을 무한히 받는다.
});

rl.on('close', () => {
// 입력이 끝난 후 실행할 코드
})
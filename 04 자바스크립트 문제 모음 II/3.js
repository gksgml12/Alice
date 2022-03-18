// 지시사항을 참고하여 코드를 작성하세요.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => { 
    a=line.split(' ');
    if ((a[0]<=a[1] && a[0]===a[3] && a[1]>a[2] && a[2]<6) || (a[0]===a[1] && a[0]===a[2] && a[0]===a[3])) {
        console.log(true)
    } else {
        console.log(false)
    }
    
    // console.log(input)
    rl.close(); // close가 없으면 입력을 무한히 받는다.
});

rl.on('close', () => {
// 입력이 끝난 후 실행할 코드
})
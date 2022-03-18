// 터미널에 엘리스 토끼가 가진 금액을 입력할 수 있으며 입력된 금액에 따라 결과를 출력합니다.
// 조건문을 이용해 문제를 해결할 수 있습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => { 
    if (line>=1000) {
        console.log('택시');
    } else if (line>=500) {
        console.log('버스');
    } else if (line>=300) {
        console.log('지하철');
    } else {
        console.log('도보');
    }
    rl.close(); // close가 없으면 입력을 무한히 받는다.
});

rl.on('close', () => {
// 입력이 끝난 후 실행할 코드
})
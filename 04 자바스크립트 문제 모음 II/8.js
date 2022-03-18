// "촉촉한 초코칩"이 몇 번 나오는지 확인해봅시다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => { 
    str=/촉촉한 초코칩/g
    var rs=line.match(/촉촉한 초코칩/g);
    if (line.includes('촉촉한 초코칩')) {
        console.log(rs.length)
    }
        rl.close(); // close가 없으면 입력을 무한히 받는다.
    
});

rl.on('close', () => {
// 입력이 끝난 후 실행할 코드
})
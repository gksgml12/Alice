// "촉촉한 초코칩"이 몇 번 나오는지 확인해봅시다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var rs=''

rl.on("line", (line) => { 
    for (var i=0;i<line.length;i++){
        if (line.charCodeAt(i)>=48 && line.charCodeAt(i)<=57) {
            rs+=line[i]
        } 
    }
    console.log(rs)
    rl.close(); // close가 없으면 입력을 무한히 받는다.
});

rl.on('close', () => {
    // 입력이 끝난 후 실행할 코드
})
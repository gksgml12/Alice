const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (n) => { 
    rs=[0,1]
    rs1=0
    if (n==1) {
        console.log([0])
    } else if (n==2) {
        console.log([1])
    } else {
        while (rs1<n) {
            rs1=rs[-1]+rs[-2]
            rs.push(rs1)
        }
        console.log(rs)
    }
    
    rl.close(); // close가 없으면 입력을 무한히 받는다.
});

rl.on('close', () => {
// 입력이 끝난 후 실행할 코드
})
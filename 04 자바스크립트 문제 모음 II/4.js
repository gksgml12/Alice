// 지시사항을 참고하여 코드를 작성하세요.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => { 
    var rs=[]
    for (var i =1;i<parseInt(Math.sqrt(line))+1;i++) {
        if (line%i===0) {
            rs.push(i)
            rs.push(line/i)
        }
    }
    
    function compareNumbers(a, b) {
    return a - b;
    }
    
    rs.sort(compareNumbers);
    // rs.forEach((e)=>console.log(e));
    // console.log(rs.join(' '));
    
    
    var ans=[]
    // console.log(rs);
    for (var i=0;i<rs.length;i++) {
        ans.push(rs[i])
        if (ans.length === 10){
            console.log(ans.join(" "));
            ans = []
        }
    }
    ans=[]
    for (var i=Math.floor(rs.length/10)*10;i<rs.length;i++) {
        ans.push(rs[i])
    }
    console.log(ans.join(" "));
    
    rl.close(); // close가 없으면 입력을 무한히 받는다.
});

rl.on('close', () => {
// 입력이 끝난 후 실행할 코드
})
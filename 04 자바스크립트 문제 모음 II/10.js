const readline = require("readline")
const rl = readline.createInterface({
     input: process.stdin,
     output: process.stout,
}) 
var cnt = 0;
var a = [16, 6];
rl.on("line", (x) => {
    a[cnt] += parseInt(x);
    cnt++;
    if (cnt == 2) {
        answer = String(a[1]/a[0].toFixed(3))
        if (answer[2] != 0) {console.log(answer[2] + "할")} 
        if (answer[3] != 0) {console.log(answer[3] + "푼")} 
        if (answer[4] != 0) {console.log(answer[4] + "리")} 
    rl.close();
    }
});

rl.on("close", ()=>{

})
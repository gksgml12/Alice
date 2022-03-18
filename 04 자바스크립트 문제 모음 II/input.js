const { stdin, stdout, listenerCount } = require('process')
const readline = require("readline")

consr rl = readline.createInterface({
    input: stdin,
    output: stdout,
})
var cnt=0
rs=[]
rl.on("line", (x)=> {
    if (cnt==0) {
        var n=x
    }
    while (cnt<n) {
        rs.push(x)
    }
    cnt++;
    rl.close();
})

rl.on("close",()=>)
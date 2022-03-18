// 지시사항을 참고하여 코드를 작성하세요.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
 rl.on("line", (line) => { 
     input.push(line);
     rl.close(); // close가 없으면 입력을 무한히 받는다.
  });
  rl.on('close', () => {
    // 입력이 끝난 후 실행할 코드
    sol(input[0])
  })
  
const sol = (input) =>{
    const arr = input.split('');
    const result = [];
    for(const item of arr){
        if(' ' === item){
            result.push('링디기디기\n');
        } else if('.' === item){
            result.push('딩딩딩\n');
        } else {
            result.push('링딩동 ');
        }
    }
    
    console.log(result.join(''));
}
// 반복문을 이용하여 3, 6, 9 게임을 만들어주세요!
const regex365 = /3|6|9/g;

for (var i=1;i<31;i++) {
    var str = i.toString();
    if (str.match(regex365)) {
        console.log("짝!");
    } else {
        console.log(i)
    }
}
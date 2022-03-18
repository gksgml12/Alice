const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry']
var sum=0;

for (var i=0;i<fruits.length;i++) {
    if (fruits[i][0]==='b') {
        sum++;
    }
}
document.write('b로 시작하는 과일은 '+sum+'개');

n=6
//2차원 배열 생성
var arr = [];
var dx=[0,1,0,-1];
var dy=[1,0,-1,0];
var k=0
var cnt=1
var x=0
var y=0

for(var i=0; i<n; i++){
    arr[i] = [];
    for(var j=0; j<n; j++){
        arr[i][j] = 0;
    }
}

while(cnt<=n*n) {
    if (x<n && y<n && x>=0 && y>=0 && arr[x][y]==0) {
        arr[x][y]=cnt
        x=x+dx[k]
        y=y+dy[k]
        cnt+=1
    } else {
        x=x-dx[k]
        y=y-dy[k]
        k=(k+1)%4
        x=x+dx[k]
        y=y+dy[k]
    }
}

lenv=String(n*n).length+2
console.log(lenv);
// aa=String(arr[3][3]);
// console.log(aa)
for(var i=0; i<n; i++) {
    rs=''
    for (var j=0; j<n; j++) {
        for (var k=0; k<lenv-String(arr[i][j]).length;k++) {
            rs+=' '
        }
        rs+=String(arr[i][j]);
    }
    console.log(rs);
}
// console.log(arr)
n=int(input())
array=[list(map(int,input().split())) for _ in range(n)]

cnt=0
x,y=0,0

while True:
    if x==n-1 and y==n-1:
        print('yes')
        cnt+=1
        break
    
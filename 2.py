n=int(input())
array=[list(map(int,input().split())) for _ in range(n)]
print(array)
x=0
y=0
dx=[0,1]
dy=[1,0]
rs=True
cnt=0

def sol(x,y):
    print('start')
    global cnt
    if x==n-1 and y==n-1:
        print('yes')
        cnt+=1
        return 0
    for i in range(2):
        nx=x+dx[i]*array[x][y]
        ny=y+dy[i]*array[x][y]
        print(nx,ny)
        if nx>=n or ny>=n:
            print('break')
            # rs=False
            return 0
        else:
            x1=nx
            y1=ny
            sol(x1,y1)

sol(x,y)
print('cnt',cnt)
        
    
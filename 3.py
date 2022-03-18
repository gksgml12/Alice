arr=list(map(int,input().split()))
arr2=sorted(arr)

print(arr,arr2)

cnt=0
while True:
    if arr==arr2:
        break
    k=-1
    j=-1
    if arr2[k]==arr[j]:
        k-=1
    else:
        j-=1
        cnt+=1
        if arr2[k]==arr[j]:
            arr.remove(arr[j])
            arr=arr2[k]+arr
            

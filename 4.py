a,b=map(int,input().split(':'))
if max(a,b)<=3 or abs(a-b)<2:
    print(True)
else:
    print(False)

    
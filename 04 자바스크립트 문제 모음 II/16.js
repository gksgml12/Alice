const students = [
    {
        name: 'john',
        studentId: 2020123456,
        major: 'business'
    },
    {
        name: 'elice',
        studentId: 2015111111,
        major: 'statistics'
    },
    {
        name: 'jennifer',
        studentId: 2017000000,
        major: 'visual design'
    }
]

for (var i=0;i<students.length;i++) {
    if (students[i]['name']==='elice') {
        students[i]['major']='computer science'
        break
    }
}
for (var i=0;i<students.length;i++) {
    document.write(students[i]['name']+'\'s major: '+ students[i]['major']+'<br>')
}
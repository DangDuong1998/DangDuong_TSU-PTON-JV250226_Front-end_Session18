const oldStudent = {
    id:1,
    name : 'Nguyễn Văn A',
    gender: 'nam',
    age: 20,
    mark: 8
}
const newStudent = {
    id:2,
    name : 'Nguyễn Văn B',
    gender: 'nam',
    age: 25,
    mark: 7
} ;
const students=[];
students.push(oldStudent,newStudent);
console.log(students);
alert('newStudent '+'\nId: '+newStudent.id+'\nName: '+ newStudent.name+'\nGender: '+newStudent.gender+'\nAge: '+newStudent.age+'\nMark: '+newStudent.mark);

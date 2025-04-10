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
const maxMark =  ()=>{
    let max = students[0];
    for(let i of students){
        if(i.mark> max.mark){
            max.mark = i.mark;
        }
    }
    return max;
}
let topStudent = maxMark()
console.log(topStudent.name + ' là học sinh có điểm cao nhất!!!\nThông tin:\n'+ 'Id: '+topStudent.id +'\nName: '+ topStudent.name +'\nGender: '+ topStudent.gender +'\nAge: '+ topStudent.age +'\nMark: '+ topStudent.mark);


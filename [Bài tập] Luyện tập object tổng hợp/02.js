const course = [
    {no:1,name:'HTML',complete: false},
    {no:2,name:'CSS',complete: false},
    {no:3,name:'Basic of javascript',complete: false},
    {no:4,name:'Node package Manager (npm)',complete: false},
    {no:5,name:'Git',complete: false}
];
console.log(course);
const updateCourse = ()=>{
    const div=document.getElementsByTagName('div')[0];
    div.innerHTML = '';
    for(let i in course){
        div.innerHTML+=`<hr>`;
        div.innerHTML+=`<div></div>`;
        div.innerHTML+=course[i].no+'. '+course[i].name+ `<br />` +'Complete: '+course[i].complete+'\n';
        if(Number(i)===course.length-1){
            div.innerHTML+=`<hr>`;
        }
    }
}

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click',()=>{
    while(true){
        let input = prompt('Nhập vào C/R/U/D/E')
        if(input==='C'||input ==='c'){
            let newCourseName = prompt('Nhập tên khóa học cần thêm');
            let newCourseProgress = prompt('Nhập trạng thái hoàn thành(true/false)');
            let newCourse={no:course.length+1,name:newCourseName,complete:newCourseProgress};
            course.push(newCourse);
            updateCourse();
            break;
        }
        else if(input==='R'||input ==='r'){
            updateCourse();
            break;
        }
        else if(input==='U'||input ==='u'){
            while(true){
                let flag=false
                let update = +prompt('Bạn muốn update khóa học vị trí số mấy?');
                for(let i in course){
                    if(course[i].no===update){
                        let newInputName =prompt('Hãy cập nhật tên khóa:')
                        let newInputProgress=prompt('Hãy cập nhật lại trạng thái:')
                        course[i].name = newInputName;
                        course[i].complete = newInputProgress;
                        flag=true;
                        break;
                    }
                }
                if(flag===false){
                    alert('Không tìm thấy vị trí khóa học cần update!!!');
                }
                else{
                    alert('Đã Update!!!')
                    updateCourse();
                    break;
                }
            }
            break;
            
        }
        else if(input==='D'||input ==='d'){
            let flag = false
            let deleteCourse = +prompt('Bạn muốn xóa khóa học vị trí số mấy?');
            for(let i in course){
                if(course[i].no===deleteCourse){
                    course.splice(i,1);
                    flag=true;
                    break;
                }
            }
            if(flag===false){
                alert('Không tìm thấy vị trí khóa học cần xóa!!!');
            }
            else{
                alert('Đã Xóa!!!')
                updateCourse();
                break;
            }
            
        }
        else if(input==='E'||input ==='e'){
            alert('Cảm ơn bạn đã đến với Rikkei Academy');
            break;
        }
        else{
            alert('Hãy nhập lại!!!');
        }
    }
    
    
})

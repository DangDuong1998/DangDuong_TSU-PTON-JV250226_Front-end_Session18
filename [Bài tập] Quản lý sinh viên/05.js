const studentDataList =[];
const studentDataFunct=(stuName,stuAge,stuClass)=>{
        const student = {
            name: stuName,
            age: stuAge,
            class: stuClass
        }
        return student;
}


const render = (list)=>{
    const studentList = document.querySelector('.student_data_replace');
    studentList.innerHTML = ''
    for(let i in list){
        studentList.innerHTML += `
        <div class="student_data data_el">
                <div class="student_name">${list[i].name}</div>
                <div class="student_age">${list[i].age}</div>
                <div class="student_class">${list[i].class}</div>
                <div>
                    <button class="fix funct_btn">Sửa</button>
                    <button class="delete funct_btn">Xóa</button>
                </div>
            </div>
            <hr />
            `
    }
    const eachStudentData = document.querySelectorAll('.data_el')
    let isEdit;
    eachStudentData.forEach((el,i)=>{
        isEdit=false;
        const functButtonFix = el.querySelector('.fix');
        const functButtonDel = el.querySelector('.delete');
        functButtonFix.addEventListener('click',()=>{
            if(isEdit===false){
                const stuNameFix=el.querySelector('.student_name');
                stuNameFix.innerHTML=`<input class="newName" type="text" value="${stuNameFix.innerText}">`;
                const stuAgeFix=el.querySelector('.student_age');
                stuAgeFix.innerHTML=`<input class="newAge" type="text" value="${stuAgeFix.innerText}">`;
                const stuClassFix=el.querySelector('.student_class');
                stuClassFix.innerHTML=`<input class="newClass" type="text" value="${stuClassFix.innerText}">`;
                functButtonFix.innerText='Lưu';
                functButtonFix.style.backgroundColor = 'Green';
                functButtonDel.style.backgroundColor='Orange';
                functButtonDel.innerText='Hủy';
                isEdit=true;
            }
            if(isEdit===true){
                functButtonDel.addEventListener('click',()=>{
                    render(list);
                })
                functButtonFix.addEventListener('click',()=>{
                    const newStuName=el.querySelector('.newName');
                    const newStuNameVal = el.querySelector('.newName').value;
                    const newStuAge=el.querySelector('.newAge');
                    const newStuAgeVal = el.querySelector('.newAge').value;
                    const newStuClass=el.querySelector('.newClass');
                    const newStuClassVal = el.querySelector('.newClass').value;
                    let error = false;
                    let oldDiv=el.querySelector('.warning_text');
                    let warn;
                    if(oldDiv)oldDiv.remove();
                    newStuName.addEventListener('input',()=>{
                        if(newStuName.value!==""){
                            newStuName.classList.remove('warning');
                        }
                    })
                    newStuAge.addEventListener('input',()=>{
                        if(newStuAge.value!==""){
                            newStuAge.classList.remove('warning');
                        }
                    })
                    newStuClass.addEventListener('input',()=>{
                        if(newStuClass.value!==""){
                            newStuClass.classList.remove('warning');
                        }
                    })
                    if(newStuNameVal===''){
                        newStuName.classList.add('warning');
                        error=true;
                    }
                    if(newStuAgeVal===''){
                        newStuAge.classList.add('warning');
                        error=true;
                    }
                    if(newStuClassVal===''){
                        newStuClass.classList.add('warning');
                        error=true;
                    }
                    if(error===true){
                        warn = document.createElement('div');
                        warn.innerText='Nhập gì đó!!!';
                        warn.classList.add('warning_text');
                        el.appendChild(warn);
                        return;
                    } 
                    if(newStuNameVal!==''&&newStuAgeVal!==''&&newStuClassVal!==''){
                        const fixStudent = studentDataFunct(newStuNameVal,newStuAgeVal,newStuClassVal);
                        studentDataList[i]=fixStudent;
                        isEdit=false;
                        render(list);
                        console.log(fixStudent);
                    }
                })
                
            }
        })
        
        functButtonDel.addEventListener('click',()=>{
            if(isEdit===false){
                studentDataList.splice(i,1);
                render(list);
            }
                
        })
        
    })
}
const searchTab = document.querySelector('.search_bar');
const addStudentButton = document.querySelector('.add_btn');
const header=document.querySelector('.warntab');
addStudentButton.addEventListener('click',()=>{
    const stuNameInput = document.querySelector('.stu_name_inp');
    const stuAgeInput = document.querySelector('.stu_age_inp');
    const stuClassInput = document.querySelector('.stu_class_inp');
    const stuName = stuNameInput.value;
    const stuAge = stuAgeInput.value;
    const stuClass = stuClassInput.value;
    let error = false;
    let oldDiv=header.querySelector('.warning_text');
    if(oldDiv) oldDiv.remove();
    stuNameInput.addEventListener('input',()=>{
        if(stuNameInput.value!==""){
            stuNameInput.classList.remove('warning');
        }
    })
    stuAgeInput.addEventListener('input',()=>{
        if(stuAgeInput.value!==""){
            stuAgeInput.classList.remove('warning');
        }
    })
    stuClassInput.addEventListener('input',()=>{
        if(stuClassInput.value!==""){
            stuClassInput.classList.remove('warning');
        }
    })
    let warn;
    if(stuName===''){
        stuNameInput.classList.add('warning');
        error=true;
    }
    if(stuAge===''){
        stuAgeInput.classList.add('warning');
        error=true;
    }
    if(stuClass===''){
        stuClassInput.classList.add('warning');
        error=true;
    }
    if(error===true){
        warn = document.createElement('div');
        warn.innerText='Nhập gì đó!!!';
        warn.classList.add('warning_text');
        header.appendChild(warn);
        return;
    }
    else{
        const studentData=studentDataFunct(stuName,stuAge,stuClass);
        studentDataList.push(studentData);
        searchTab.value='';
        stuNameInput.value='';
        stuAgeInput.value='';
        stuClassInput.value='';
        render(studentDataList); 
    }
    
})
searchFunct =(str)=>{
    const studentFilterList = studentDataList.filter(student=>student.name.includes(str));
    if(str===''){
        render(studentDataList);
    }
    else{
        render(studentFilterList);
    }
}
searchTab.addEventListener('input',()=>{
    searchFunct(searchTab.value);
})


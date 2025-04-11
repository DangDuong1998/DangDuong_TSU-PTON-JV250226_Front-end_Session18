const addButton = document.querySelector('.add_button');
const list = document.querySelector('.list');
const titleInput = document.querySelector('.title');
const listArray =[];
let colorCheck = true;
let progress=false;

const customTask01 = (title,classColor,checkStatus,textStatus) =>{
    list.innerHTML+=
    `<div class="task_layout ${classColor}">
        <div class="${checkStatus}">&check;</div>
        <div class="title_task ${textStatus}">${title}</div>
       <div class="function_list">
            <div class = "show_toggle read">R</div>
            <div class ="show_toggle update">U</div>
            <div class ="show_toggle delete">D</div>
        </div>
    </div>`  
}
const renderFunct=()=>{
    list.innerHTML='';
    for(i in listArray){
        if(Number(i)%2===0){
            if(listArray[i].progress===true){
                customTask01(listArray[i].name,'task_done','check_on','text_delete');
            }
            else{
                customTask01(listArray[i].name,'task01','check_off');
            }
           
        }
        else{
            if(listArray[i].progress===true){
                customTask01(listArray[i].name,'task_done','check_on','text_delete');
            }
            else{
                customTask01(listArray[i].name,'task02','check_off');
            }
            
        }
    }
}
const showFunction = () => {
    const taskList = document.querySelectorAll('.task_layout');
    taskList.forEach(task => {
      const toggles = task.querySelectorAll('.show_toggle');
      task.addEventListener('mouseover', () => {
        toggles.forEach(toggle => {
          toggle.style.display = 'flex';
        });
      });
      task.addEventListener('mouseleave', () => {
        toggles.forEach(toggle => {
          toggle.style.display = 'none';
        });
      });
    });
  };

const selectFunction= () => {
    const taskList = document.querySelectorAll('.task_layout');
    const functionList = document.querySelectorAll('.function_list');
    functionList.forEach((funct,i)=>{
        // const index = taskList[i].dataset.index;
        const buttonR = funct.querySelector('.read');
        buttonR.addEventListener('click',()=>{
            taskList[i].innerHTML+=`
            <div class="popup">
                <div class="popup_header">
                    <div class="popup_close">X</div>
                </div>
                <div class ="popup_info">
                    Task Title: ${listArray[i].name}<br/>Task's complete status: ${listArray[i].progress}
                </div>
            </div>`
            const close=taskList[i].querySelector('.popup_close');
            close.addEventListener('click',()=>{
                renderAll();
            })
            // alert('Read!!! '+i);
        })
        const buttonU = funct.querySelector('.update');
        
        buttonU.addEventListener('click',()=>{
            const isDone=listArray[i].progress;
            const customTitle = taskList[i].querySelector('.title_task');
            let titleValue= listArray[i].name;
            customTitle.innerHTML=`<input type=checkbox class="check_box" ${isDone ? 'checked':''}>`
            customTitle.innerHTML+=`<input type= "text" placeholder="${titleValue}" class="custom_input">`
            customTitle.innerHTML+=`<div class = "confirm opt"></div>`;
            customTitle.innerHTML+=`<div class = "cancel opt"></div>`;
            const input = customTitle.querySelector('.custom_input');
            const confirm= customTitle.querySelector('.confirm');
            const cancel= customTitle.querySelector('.cancel');
            const checkBox= customTitle.querySelector('.check_box');
            input.focus();
            confirm.addEventListener('click',()=>{
                const newValue = input.value.trim();
                if(newValue !==''){
                    listArray[i].name= newValue;
                    if(checkBox.checked){
                        // alert('checked') 
                        listArray[i].progress=true;
                    }      
                    else{
                        listArray[i].progress=false;
                        // alert('unchecked')
                    }
                    renderAll();  ;
                }
                else{
                    if(checkBox.checked){
                        // alert('checked')
                        listArray[i].progress=true;
                    }      
                    else{
                        listArray[i].progress=false;
                        // alert('unchecked')
                    }
                    input.blur();
                    renderAll();
                }
                
            })
            cancel.addEventListener('click',()=>{
                input.blur();
                renderAll();
            })
            
        })
        const buttonD = funct.querySelector('.delete');
        buttonD.addEventListener('click',()=>{
            listArray.splice(i,1);
            // alert('Deleted!!!');
            renderAll();
        })
        
    })
}
const renderAll = ()=>{
    renderFunct();
    showFunction();
    selectFunction();
}
addButton.addEventListener('click',()=>{
    list.innerHTML='';
    if(titleInput.value.trim()!==''){
        let titleObject={name:titleInput.value.trim(),progress: progress}
        listArray.push(titleObject);
        titleInput.value='';
    }
    renderAll();
})
titleInput.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        list.innerHTML='';
        if(titleInput.value.trim()!==''){
            let titleObject={name:titleInput.value.trim(),progress: progress}
            listArray.push(titleObject);
            titleInput.value='';
        }
        renderAll();
    }
    
})
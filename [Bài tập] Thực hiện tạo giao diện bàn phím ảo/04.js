const monitor = document.querySelector('.monitor');
const data=[];
const keyTyping = ()=>{
    const keys=document.querySelectorAll('.key');
    keys.forEach(key=>{
        key.addEventListener('click',()=>{
            if(key.innerText !== 'Xóa'&& key.innerText !== 'Space'){
                data.push(key.innerText);
                monitor.innerHTML = data.join('');
            }
            else if(key.innerText ==='Space'){
                data.push(' ');
                monitor.innerHTML = data.join('');
            }
            else{
                data.splice(data.length-1,1);
                monitor.innerHTML =data.join('');
                
            }
           
        })
    })
}
keyTyping();
const burger=document.querySelector('#ham-burger');
const content=document.querySelector('#menu-items');

burger.addEventListener('click',()=>{
   content.classList.toggle('hidden')
})
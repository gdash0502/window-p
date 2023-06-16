'use strict' ;
 
 const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnclose=document.querySelector('.close-modal')
const openmodal=document.querySelectorAll('.show-modal')
console.log(openmodal);
for( let i=0;i<openmodal.length;i++)
openmodal[i].addEventListener('click',function(){
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});
/*const closemodal=function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnclose.addEventListener('click',closemodal);
overlay.addEventListener('click',closemodal);*/
btnclose.addEventListener('click',function(){  
    modal.classList.add('hidden');
})
overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
}) 
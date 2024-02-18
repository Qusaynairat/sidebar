const btn=document.querySelector('.btn');
const exit=document.querySelector('.exit');
const overlay=document.querySelector('.overlay');
const sidebar=document.querySelector('.sidebar');
btn.addEventListener("click",function(){
    sidebar.style.right="0";
    overlay.style.opacity="1";
    overlay.style.visibility="visible";
});
exit.addEventListener("click",function(){
    sidebar.style.right="-400px";
    overlay.style.opacity="0";
    overlay.style.visibility="hidden";
});
// console.log(document);
document.addEventListener("click",function(e){
// console.log(e.target);
    if(e.target !== btn && e.target !== sidebar){
        sidebar.style.right="-400px";
        overlay.style.opacity="0";
        overlay.style.visibility="hidden";
    }
});
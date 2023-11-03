let display=document.getElementById("display");
let inputBox=document.getElementById("input-box");
inputBox.addEventListener("keypress",function(e){
    display.innerText="You have pressed "+ e.key;
})
const decBtn=document.getElementById("decBtn");
const incBtn=document.getElementById("incBtn");
const resetButton=document.getElementById("resetButton");
const displayValue=document.getElementById("displayValue");
decBtn.addEventListener("click",()=>{
    const value=Number(displayValue.innerText);
    if(value>0){
        displayValue.innerText=value-1;
    }
    else{
        alert("Negative value are not allowed");
    }
})
incBtn.addEventListener("click",()=>{
   const value=Number(displayValue.innerText);
   if(value<10){
        displayValue.innerText=value+1;
   }
   else{
    alert("Value above 10 are not allowed");
   }
})
resetButton.addEventListener("click",()=>{
    displayValue.innerText=0;
})      
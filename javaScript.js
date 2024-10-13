let display = document.querySelector("input[name='display']");
const buttons = document.querySelectorAll("input[type='button']");
const specialChars = ["*", "/", "-","+","="];
let output ="";




const calculatr = (btnValue)=>{
    if(btnValue === "AC"){
        output ="";
    }else if (btnValue==="DE"){
        output = display.value.toString().slice(0,-1)
    }
    else if(btnValue === "="){
       output = eval(output)
    }else{
    if(output ==="" && specialChars.includes(btnValue)) return;
    output +=btnValue
    
    }
    display.value = output
};


buttons.forEach(button=>{
button.addEventListener("click",(button)=>
    calculatr(button.target.value)) 
    
});


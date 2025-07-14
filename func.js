//declare value
const display = document.getElementById("screen");

//add function to value
function dis(input){
    display.value += input;
}

function convert(){
    try{
    display.value = eval(display.value);
}catch(error){
    display.value = "error";
    }
}

function clearsc(){
    display.value = '';
}

function back(){
    display.value = display.value.slice(0,-1);
}
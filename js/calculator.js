const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        let result = eval(display.value);
        display.value = result.toFixed(3)
    }
    catch(error){
        display.value = "Error";
    }
}
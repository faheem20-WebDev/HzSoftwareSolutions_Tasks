let calculation = "";
const screen = document.getElementById("result-screen");

function clearAll(){
    calculation = "";
    screen.value = "";
}

function deleteOne(){
    calculation = calculation.slice(0, -1);
    screen.value = calculation;
}

function result(){
    calculation = eval(calculation);
    screen.value = calculation;
}
function appendToDisplay(value) {
    calculation += value;
    screen.value = calculation;
}
document.addEventListener("keydown", function(event){
    if(event.key >= "0" && event.key <= "9" ||
       event.key === "+" || event.key === "-" ||
       event.key === "*" || event.key === "/" ||
       event.key === "."){
        calculation += event.key;
        screen.value = calculation;
    }
    else if(event.key === "Enter"){
        result();
    }
    else if(event.key === "Backspace"){
        deleteOne();
    }
    else if(event.key === "Escape"){
        clearAll();
    }
});

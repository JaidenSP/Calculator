//Create basic + - / * functions and a main calculator function

function addition(a, b, operate){
    let calculated = a + b;
    return operate(calculated);
    
}

function subtraction(a, b){
    let calculated = a - b;
    return calculated;
}

function division(a, b) {
    let calculated = a / b;
    return calculated; 
}

function multiplication(a, b){
    let calculated = a * b;
    return calculated;
}

//create an operate function that uses the other functions and calls on the function and numbers
//create a basic calculator with html and css with an equals button and a clear button (create a display with for the buttons)
//create the functions that populate the display (should be storing the display value in a variable outside of the scope for use later)

function operate(additon){

    var calculateAddition = additon;

    return calculateAddition;
}

console.log(addition(12, 13, operate));

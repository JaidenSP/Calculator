//using the dom to maniuplate the html 
const calculatorText = document.getElementById("display-text");

document.querySelectorAll('button').forEach(el => {
    el.addEventListener('click', () => {
     displayInput(el.textContent);
    });
});

calculatorText.textContent = "123456"


//Store the button clicked value
let displayValue = '';


//Create basic + - / * functions and a main calculator function

function addition(a, b){
   return a + b;
        
}

function subtraction(a, b){
   return a - b;
    }

function division(a, b) {
   return a / b;
    
}

function multiplication(a, b){
   return a * b;
    }

//create an operate function that uses the other functions and calls on the function and numbers
//create a basic calculator with html and css with an equals button and a clear button (create a display with for the buttons)

function operate(func){
    func();

}

//create the functions that populate the display (should be storing the display value in a variable outside of the scope for use later)

function displayInput(digit){
  
  calculatorText.textContent = digit;

}




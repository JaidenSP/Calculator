//using the dom to maniuplate the html 
const calculatorText = document.getElementById("display-text");

let buttonsClicked = document.querySelectorAll('button').forEach(el => {
    el.addEventListener('click', () => {
     displayInput(el.textContent);
    });
});

calculatorText.textContent = "123456"


//Store the button clicked value
let firstNumberClicked = '';
let operatorClicked = '';
let finalOperatorClicked = '';


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

function operate(num1, num2, operator){
    
    if (operator == addition){

        return addition(num1, num2);
        
    }
    else if (operator == subtraction){

        return subtraction(num1, num2);
    }
    else if (operator == division){

        return division(num1, num2);
    }
    else if (operator == multiplication){

        return multiplication(num1, num2);
    }
    else {
        return "Please use an operator";
    }

}

//create the functions that populate the display (should be storing the display value in a variable outside of the scope for use later)
//TODO use the input from buttons to start the operate function and then display answer on the calculator

function displayInput(digit){
  
  calculatorText.textContent = digit;

}




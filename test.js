const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const previousOpperant = document.querySelector('[data-previous-operation]');
const currentOpperant = document.querySelector('[data-current-operation]');


class Calculator{
    constructor(previousOpperant, currentOpperant){
        this.previousOpperant = previousOpperant;
        this.currentOpperant = currentOpperant;

    }

    clear(){
        this.currentOpperant = '';
        this.previousOpperant = '';
        this.opperation = undefined;
    }

    appendNumber(number){
        this.currentOpperant = number;
    }

    chooseOpperation(opperation){
    }

    compute(){

    }

    updateDisplay(){
        this.currentOpperant.innerText = this.currentOpperant;
    }
}


const calculator = new Calculator(previousOpperant, currentOpperant);

numberButtons.forEach(button => {
    button.addEventListener('click', function(){
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})



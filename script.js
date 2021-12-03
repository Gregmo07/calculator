let value = '';
let firstValue = '';
let operatorChoosed = false;
let choosedOperator = '';
let t = 0;
const display = document.querySelector('.display');

document.querySelector('#clear').addEventListener('click', () => clearAll())

document.querySelectorAll(".chiffre").forEach(chiffre =>
    chiffre.addEventListener('click', () => { writeDisplay(chiffre.innerText) }));


    function writeDisplay(number) {
        if (value == '') {
            display.innerText = '';
        }
        value += number;
        display.innerText += number;
    
    }


    document.querySelectorAll('.operator').forEach(operatorSelected =>
        operatorSelected.addEventListener('click', () => { chooseOperator(operatorSelected) }));
    

function chooseOperator(operator) {
    if (choosedOperator == ''){
        choosedOperator = operator.id
    }
    if (operator.id == 'equal' && value != '') {
        operate(choosedOperator, firstValue, value);
        firstValue = '';
    } else if (choosedOperator != 'equal' && operatorChoosed && value != '' && firstValue != '') {
        
       operate(choosedOperator, firstValue, value);
        
    } else {
        operatorChoosed = true;
        
        if (firstValue ==''){
            firstValue = value;
        }
        value = '';
    }
}



function operate(oper, a, b) {
    let result;
    switch (oper) {
        case 'add':
            result = add(a, b);
            break;
        case 'substract':
            result = substract(a, b);
            break;
        case 'multiply':
            result = multiply(a, b);
            break;
        case 'divide':
            result = divide(a, b);
            break;
        case 'modulo':
            result = modulo(a, b);
            break;
        default:
            break;
    }
    display.innerText = result;
    firstValue = result;
    choosedOperator = '';
    value = '';
    operatorChoosed = false;

}


function add(a, b) {
    return +a + +b;
}

function substract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function clearAll() {
    value = '';
    firstValue = '';
    choosedOperator = '';
    operatorChoosed = false;
    display.innerText = '';
}
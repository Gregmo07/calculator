let newValue = true;
let firstValue = '';
let choosedOperator = '';
const display = document.querySelector('.display');

document.querySelector('#clear').addEventListener('click', () => clearAll())

function clearAll() {
    value = '';
    firstValue = '';
    choosedOperator = '';
    display.innerText = '';
}


document.querySelectorAll(".chiffre").forEach(chiffre =>
    chiffre.addEventListener('click', () => { writeDisplay(chiffre.innerText) }));

function writeDisplay(number) {
    if (newValue) {
        display.innerText = '';
    }
    display.innerText += number;
    newValue = false;
}


document.querySelectorAll('.operator').forEach(operatorSelected =>
    operatorSelected.addEventListener('click', () => { chooseOperator(operatorSelected) }));

function chooseOperator(operator) {

    if (display.innerText != '') {
        if (firstValue == '') {
            firstValue = display.innerText;
            choosedOperator = operator.id;
            newValue = true;
            return;
        }
        if (operator.id == 'equal') {
            operate(choosedOperator, firstValue, display.innerText);
            firstValue = '';
            return;
        }
        operate(choosedOperator, firstValue, display.innerText);
        choosedOperator = operator.id;
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
    newValue = true;

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


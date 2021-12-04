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
    if(display.innerText.length == 12) {
        alert('Vous ne pouvez pas saisir plus de 12 chiffres.');
        return;
    }
    if (newValue) {
        display.innerText = '';
    }
    display.innerText += number;
    newValue = false;
}



document.querySelectorAll('.operator').forEach(operatorSelected =>
    operatorSelected.addEventListener('click', () => { chooseOperator(operatorSelected) }));

function chooseOperator(operator) {

    if (operator.id == 'factorial'){
        display.innerText = factorial(display.innerText);
        return;
    }   

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
            if (b == 0){
                divideByZero();
                return;
            }
            result = divide(a, b);
            break;
        case 'modulo':
            result = modulo(a, b);
            break;
        default:
            break;
    }
    let roundedResult = Number.parseFloat(+result).toPrecision(12);
    if(+roundedResult == +Math.floor(roundedResult)) roundedResult = Math.floor(roundedResult);
    display.innerText = roundedResult;
    firstValue = roundedResult;
    newValue = true;

}

function divideByZero() {
    display.innerText = '';
    display.innerHTML = '<div class="scrolling">Attempt to divide by zero</div>';
    setTimeout(() => {display.innerHTML = '<div class="scrolling">Attempt to divide by 0</div>'}, 4500);
    setTimeout(() => {display.innerHTML = '<div class="scrolling">Attempt t0 divide by 0</div>'}, 9500);
    setTimeout(() => {display.innerHTML = '<div class="scrolling">Attempt t0 divide by 0</div>';
    document.querySelectorAll(".chiffre").forEach(chiffre =>
        chiffre.classList.add('rotate'));
    }, 10500);
    setTimeout(() => {
    document.querySelectorAll(".calc").forEach(chiffre =>
        chiffre.classList.add('rotate'));
    }, 11500);
    setTimeout(() => {
        document.querySelectorAll(".calc").forEach(chiffre =>
            chiffre.classList.remove('rotate'));
            document.querySelectorAll(".chiffre").forEach(chiffre =>
                chiffre.classList.remove('rotate'));
        }, 16500);
}
function factorial(n){
        if (n === 0) {
        return 1;
        }
        return n * factorial (n-1);
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


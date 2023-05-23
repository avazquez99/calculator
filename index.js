const displayLastValue = document.getElementById('last-value');
const displayCurrentValue = document.getElementById('current-value');
const buttonsNumbers = document.querySelectorAll('.number');
const buttonsOperators = document.querySelectorAll('.operator');

const display = new Display(displayLastValue, displayCurrentValue);

buttonsNumbers.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

buttonsOperators.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
});
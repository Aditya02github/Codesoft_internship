let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (/[0-9]/.test(key)) { // If the key is a number
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) { // If the key is an operator
        appendOperator(key);
    } else if (key === 'Enter') { // If the Enter key is pressed (calculate)
        calculate();
    } else if (key === 'Escape') { // If the Escape key is pressed (clear display)
        clearDisplay();
    } else if (key === 'Backspace') { // If the Backspace key is pressed (delete last character)
        displayValue = displayValue.slice(0, -1);
        document.getElementById('display').value = displayValue;
    }
});

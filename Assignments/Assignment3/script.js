let currentInput = '';
let previousInput = '';
let operator = null;
let calculationCount = 0;

function appendNumber(number) {
    if (currentInput.length < 16) {
        currentInput += number;
        updateDisplay(currentInput);
    }
}

function operation(op) {
    if (currentInput === '' && op === '-') {
        currentInput = '-';
        updateDisplay(currentInput);
        return;
    }
    if (previousInput !== '') calculate();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function updateDisplay(value) {
    document.getElementById('display').textContent = value || '0';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay('0');
}

function calculate() {
    if (operator && currentInput) {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : 'Error';
                break;
            default:
                return;
        }
        currentInput = result.toString();
        previousInput = '';
        operator = null;
        updateDisplay(currentInput);
        incrementCalculationCount(); 
    }
}

function incrementCalculationCount() {
    calculationCount++;
    const messageElement = document.getElementById('calculation-message');
    messageElement.textContent = `Number of times you have calculated today: ${calculationCount}`;
}

let isMusicPlaying = false; 
const music = document.getElementById('background-music');
const musicToggleButton = document.getElementById('music-toggle');

function toggleMusic() {
    if (!isMusicPlaying) {
        music.play(); 
        musicToggleButton.textContent = '❚❚'; 
    } else {
        music.pause();
        musicToggleButton.textContent = '♪'; 
    }
    isMusicPlaying = !isMusicPlaying; 
}

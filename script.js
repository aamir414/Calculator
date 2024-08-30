// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to append a value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the value to the display

    // Ensure the cursor stays at the end
    display.scrollLeft = display.scrollWidth;
}

// Function to calculate the square of a number
function calculateSquare() {
    const display = document.getElementById('display');
    let number = parseFloat(display.value);

    if (!isNaN(number)) {
        display.value = Math.pow(number, 2); // Square the number and update the display
    } else {
        display.value = 'Error';
    }
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.value;

    try {
        // Evaluate the expression
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

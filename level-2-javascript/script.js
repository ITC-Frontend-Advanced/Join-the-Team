/**
 * @param {string} buttonSelector
 * @param {string} displaySelector
 * @param {number} startValue
 */

function createCounter(buttonSelector, displaySelector, startValue = 0) {
    const button = document.querySelector(buttonSelector);
    const display = document.querySelector(displaySelector);
    let count = startValue;

    if (!button || !display) {
        console.error('Button or display element not found');
        return;
    }

    display.textContent = count;

    button.addEventListener('click', () => {
        count++;
        display.textContent = count;
    });
}

"use strict";
function addNumbers(x, y) {
    return x + y;
}
function showSum() {
    const spanSum = document.querySelector('#sum');
    if (spanSum)
        spanSum.textContent = `sum: ${addNumbers(3, 6)}`;
}
showSum();

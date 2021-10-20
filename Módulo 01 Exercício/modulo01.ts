function addNumbers(x: number, y: number) {
  return x + y;
}

function showSum() {
  const spanSum: Element | null = document.querySelector('#sum');
  if (spanSum) spanSum.textContent = `sum: ${addNumbers(3, 6)}`;
}

showSum();

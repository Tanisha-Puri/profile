const billAmount = document.getElementById('billAmount');
const tipPercentage = document.getElementById('tipPercentage');
const numPeople = document.getElementById('numPeople');
const calculateBtn = document.getElementById('calculate');
const tipValue = document.getElementById('tipValue');
const tipResult = document.getElementById('tipAmount');
const tipPerPerson = document.getElementById('tipPerPerson');

// Set default tip percentage value
tipValue.textContent = `${tipPercentage.value}%`;

// Calculate tip and tip per person
function calculateTip() {
  if (billAmount.value && tipPercentage.value && numPeople.value) {
    const bill = parseFloat(billAmount.value);
    const tip = parseFloat(tipPercentage.value) / 100;
    const num = parseFloat(numPeople.value);
    const tipAmount = (bill * tip).toFixed(2);
    const tipPerPersonAmount = (tipAmount / num).toFixed(2);

    tipResult.textContent = `$${tipAmount}`;
    tipPerPerson.textContent = `$${tipPerPersonAmount} each`;
  } else {
    alert('Please enter all values');
  }
}

// Update tip percentage value
tipPercentage.addEventListener('input', () => {
  tipValue.textContent = `${tipPercentage.value}%`;
  calculateTip();
});

// Calculate tip on button click
calculateBtn.addEventListener('click', calculateTip);

// Calculate tip on keypress
billAmount.addEventListener('keyup', calculateTip);
numPeople.addEventListener('keyup', calculateTip);
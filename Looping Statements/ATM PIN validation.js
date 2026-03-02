let correctPin = 1234;
let enteredPins = [1111, 2222, 3211,1234]; // user attempts
let attempts = 0;
let index = 0;

while (attempts < 3 && index < enteredPins.length) {
  let enteredPin = enteredPins[index];

  if (enteredPin === correctPin) {
    console.log("PIN verified. Access granted.");
    break;
  } else {
    attempts++;
    console.log("Incorrect PIN. Attempts left:", 3 - attempts);
  }

  index++;
}

if (attempts === 3) {
  console.log("Card blocked. Too many incorrect attempts.");
}
let correctPassword = 123;
let enteredPassword;

while (true) {
  enteredPassword = prompt("Enter your password:");

  if (enteredPassword === correctPassword) {
    console.log("Password correct. Login successful.");
    break;
  } else {
    console.log("Incorrect password. Try again.");
  }
}
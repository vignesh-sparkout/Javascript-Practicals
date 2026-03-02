let num1 = 10;
let num2 = 5;
let operator = "+"; 

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;

  case "-":
    console.log(num1 - num2);
    break;

  case "*":
    console.log(num1 * num2);
    break;

  case "/":
    if (num2 !== 0) {
      console.log(num1 / num2);
    } else {
      console.log("Cannot divide by zero");
    }
    break;

  default:
    console.log("Invalid operator");
}
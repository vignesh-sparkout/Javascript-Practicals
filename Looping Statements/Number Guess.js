let correctNumber = 7;
let guesses = [3, 5, 6,7, 9];
let index = 2;

while (true) {
  let guess = guesses[index];

  if (guess === correctNumber) {
    console.log("Correct! You guessed the number:", guess);
    break;
  } else {
    console.log("Wrong Guess:", guess);
  }
  index++;
}




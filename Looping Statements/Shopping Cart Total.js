let cartPrices = [100, 250, 75, 0]; 
let total = 0;
let index = 0;

do {
  let price = cartPrices[index];

  if (price > 0) {
    total += price;
    console.log("Added item price:", price);
  }

  index++;
} while (cartPrices[index - 1] !== 0);

console.log("Total cart amount:", total);
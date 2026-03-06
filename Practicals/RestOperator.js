function sum(...numbers){
let total = 0;

numbers.forEach(num => total += num);
return total;
}

console.log(sum(10,20,30,40));
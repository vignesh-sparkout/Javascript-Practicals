function calculate(a,b, operation){
    let result= operation(a,b);
    console.log("Result", result)
}
function add(a,b){
    return a + b ;
}
function multiply(a,b){
  return a*b ;
}
calculate(5,5, add) 
calculate(5,5, multiply)
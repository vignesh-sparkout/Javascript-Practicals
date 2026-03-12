function outer(){
let count = 0;
        function inner(){
        count++
        console.log(count)
        }
        return inner;
        }
    let counter = outer();

counter() //1
counter() //2
counter() //3
counter() //4
// closures
/*A function remembers the variables from its outer function
 even after the outer function has finished execution*/
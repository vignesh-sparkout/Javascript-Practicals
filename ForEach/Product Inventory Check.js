let products= [
    {name:"Laptop", stock : 5},
    {name:"Mouse", stock : 0},
    {name:"Keyboard", stock : 3},
    {name:"Monitor", stock : 0},
    {name:"Charger", stock : 2}
    ]
    products.forEach( product => {
        if (product.stock=== 0 ){
        console.log(product.name, "is out of stock")
        }
    });
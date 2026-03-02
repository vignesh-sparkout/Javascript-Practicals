let sales =[250, 345, 440, 290, 300,550,115,10];
let Totalsales =0;

sales.forEach(amount => {
    Totalsales += amount;
})
console.log("Total sales is:", Totalsales);
function processOrder(ordername, callback){
    console.log("Order Confirmed:", ordername)
    callback();
}
function received(){
    setTimeout(() =>{
    console.log("Order Received")
    }, 2000)
}
processOrder("Pizza", received)
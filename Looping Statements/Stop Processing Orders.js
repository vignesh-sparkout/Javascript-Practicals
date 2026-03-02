let orders = ["Pending", "Shipped", "Delivered", "Cancelled", "Pending"];

for (let i=0; i<orders.length; i++){
    if (orders[i]==="Cancelled"){
        console.log("Order Cancelled Stopping Further process");
        break;
    }
    console.log("processing order:",orders[i])
}

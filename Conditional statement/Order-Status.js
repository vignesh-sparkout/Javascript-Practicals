let orderStatus = "Shipped"; 

switch (orderStatus) {
  case "Pending":
    console.log("Your order is pending");
    break;

  case "Shipped":
    console.log("Your order has been shipped");
    break;

  case "Delivered":
    console.log("Your order has been delivered");
    break;

  case "Cancelled":
    console.log("Your order has been cancelled");
    break;

  default:
    console.log("Invalid order status");
}
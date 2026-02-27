let balance=30000; // Total balance
let choise= 2; 
let amount=3000; // withdrew or deposite

switch (choise){
    case 1 :
        console.log("Account Balance is " + balance) 
        break;
    case 2 :
        if(amount<=balance){
           newbalance=  balance-amount;  
            console.log("Amount Withdrew Successfully")
            console.log("Available Balance is " + newbalance)
        }else {
            console.log("Insufficient Balance")
        }
        break;
    case 3 :
        amount += balance;
        console.log("Amount is Deposited")
        break;
    case 4 :
            console.log("Thank you For visited")
        break;
        default :
            console.log("Invalid Credencial")
            }
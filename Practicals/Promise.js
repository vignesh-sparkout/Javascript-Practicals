let developer = false;
 let promise = new Promise((myResolve,myReject) => {
     if(developer){
         myResolve("my project successfully completed")
     } else {
         myReject("My project is not completed");
     }
         
 })
 promise.then((successMsg) => {
     console.log(successMsg)
 }).catch((failedMsg) => {
     console.log(failedMsg) 
 }).finally (() => {
     console.log("The program is Ended")
 })
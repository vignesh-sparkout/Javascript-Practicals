let users=["Active", "Blocked", "Active", "Blocked", "Active"]

for (let i=0; i<users.length; i++){
    if (users[i]==="Blocked"){
    continue;    
    }
    console.log("Process Users:", users[i])
}

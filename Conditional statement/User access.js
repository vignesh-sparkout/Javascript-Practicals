let role= "Users";

switch(role){
    case "Admin": console.log("Full Access")
    break;
    case "Users" : console.log("Limitted Access")
    break;
    case "Guest" : console.log("View Only")
    break;
    default: console.log("Invalid Role")
}

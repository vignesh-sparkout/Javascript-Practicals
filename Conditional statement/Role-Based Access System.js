

let role = "Admin"; 

switch (role) {
  case "Admin":
    console.log("Full access");
    break;

  case "User":
    console.log("Limited access");
    break;

  case "Guest":
    console.log("View only access");
    break;

  default:
    console.log("Invalid role");
}
let employees = [
  { name: "Vignesh", salary: 52000 },
  { name: "Keerthivasan", salary: 70000 },
  { name: "Gowtham", salary: 55000 },
  { name: "Akash", salary: 50000 }
];
let highPaid = employees[0];
employees.forEach(emp => {
if (emp.salary > highPaid.salary){
    highPaid = emp
}
});
console.log("Highest Paid Employee :", highPaid.name,highPaid.salary)

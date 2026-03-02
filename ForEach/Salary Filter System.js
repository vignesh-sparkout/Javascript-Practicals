let employees = [
    {name:"Vignesh", salary : 52000},
    {name:"Keerthivasan" ,salary : 70000},
    {name : "Gowtham" ,salary : 55000},
    {name:"Akash" ,salary : 50000},
    {name : "Sakthivel", salary: 54000},
    {name: "Udhayan", salary : 48000}
    ];

employees.forEach(emp => {
if (emp.salary > 50000){
    console.log(emp.name, emp.salary)
}
})


let value = prompt("Please Enter the passitive Number :")

try {
    if (isNaN(value)) {
        throw new Error("Enter ONly number")
    }
    else if (value < 0) {
        throw new Error("Enter only Passitive Value")
    }
    else {
        console.log("Given Value is: ", value);
    }
}
catch (exe) {
    console.log(exe.message);
}



try {
    let a= 10;
    let b = 0;
    let c = a/b ;
    if (!isFinite(c)){
        throw "Error : divison by zero" 
    }
}
catch (error){
    console.log(error)
}
finally {
console.log("program Finished")
}
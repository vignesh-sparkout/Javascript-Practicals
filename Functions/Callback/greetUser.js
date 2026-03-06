function greetUser(name, callback){
    console.log("hello " + name)
    callback();
}
function welcomeMessage(){
    setTimeout(() => {
    console.log("Welcome to Sparkout Tech")
    }, 3000)
}
greetUser("Vicky ", welcomeMessage)
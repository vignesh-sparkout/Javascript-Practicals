function checkresult(marks, callback){
    let result;
    if ( marks >= 50){
        result="pass";
    } else {result = "fail"}
    callback(result)
}
function displayresult(result) {
    console.log("Student Result:" , result)
}
checkresult(60 , displayresult)
//Typescript Union Type
var user = null; // '|' pipe symbol to make 'or' type called union type
function getUser() {
    var uName = "John";
    var uAge = 28;
    user = {
        name: uName,
        age: uAge,
    };
    return user;
}
console.log(getUser());
function printStatus(message, code) {
    console.log("".concat(message, ". Status Code: ").concat(code));
}
printStatus("Successfully done", 200);
printStatus("Successfully done", "200");

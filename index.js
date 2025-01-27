//Typescript function type for callback
var addNumbers;
function sum(num1, num2) {
    return num1 + num2;
}
function add(num1, num2) {
    console.log(num1 + num2);
}
addNumbers = sum; //right
addNumbers = add; //error
function getResult(num1, num2, print) {
    var result = num1 + num2;
    print("Sum :", result);
}
function display(msg, result) {
    console.log(msg + result);
}
getResult(20, 30, display);

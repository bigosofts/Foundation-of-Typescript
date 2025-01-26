//Typescript function as a type
function createUser(user) {
    console.log("Greeting ".concat(user.name, " at your ").concat(user.age, " years old age"));
}
// let greet: Function;
var greet; //explicitly call function type that take user object and return void
greet = createUser;
var user = { name: "Limon", age: 30 };
//greet = 100;
// now we can not change greet to other value instead of function
function sum(num) {
    console.log("something");
}
// greet = sum;
//but we can assign any function to it
greet(user);

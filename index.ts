//Typescript function as a type

// type User = { name: string; age: number };

// function createUser(user: User) {
//   console.log(`Greeting ${user.name} at your ${user.age} years old age`);
// }

// let greet;

// greet = createUser;
// let user: User = { name: "Limon", age: 30 };

// greet = 100;

// greet(user);

// no error in compilation but show error in runtime because we change greet function to value .It is no longer a function

type User = { name: string; age: number };

function createUser(user: User) {
  console.log(`Greeting ${user.name} at your ${user.age} years old age`);
}

// let greet: Function;
let greet: (user: User) => void; //explicitly call function type that take user object and return void

greet = createUser;
let user: User = { name: "Limon", age: 30 };

//greet = 100;

// now we can not change greet to other value instead of function

function sum(num: number) {
  console.log("something");
}

// greet = sum;

//but we can assign any function to it

greet(user);

//type assignment

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(3, 4)); //7
console.log(add("2", "4")); //24

//no errror because we did not define any deta type yet

function add2(num1: number, num2: number) {
  return num1 + num2;
}
console.log(add2("2", "4")); //error
console.log(add2(2, 4)); //right

let n1: number = 10;
//or
let n2 = 10; //type inferance

n1 = "string"; //error

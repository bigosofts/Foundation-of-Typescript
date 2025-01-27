//Typescript function type for callback

let addNumbers: (n1:number , n2: number) => number;

function sum(num1:number, num2:number){
  return num1+num2;
}

function add(num1:number, num2:number){
  console.log(num1+ num2);
}


addNumbers = sum;  //right
addNumbers = add; //error

function getResult(num1:number, num2:number, print: (str:string, rst: number)=>void){
  const result = num1 + num2;
  print("Sum :" , result)
}


function display(msg: string, result: number){
  console.log(msg + result);
}


getResult(20,30,display);

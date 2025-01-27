//Typescript unknow type

let inputVal: unknown;

inputVal = 100;
inputVal = "hello";
inputVal = [1, 2, 3];

//when we want to use any , it will be any data type

//when use unknown when we do not know what type it is

let inputvalue: unknown; //if any then it will work. but "unknown" is not assignable to string

let uName: string;

inputvalue = 100;

//uName = inputvalue //error in unknown type but ok with any type
console.log(typeof inputvalue);
if (typeof inputvalue == "string") {
  console.log(typeof inputvalue);
  uName = inputvalue;
} //we need manual checking for unknown type

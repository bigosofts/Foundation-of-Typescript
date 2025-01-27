//Typescript unknow type
var inputVal;
inputVal = 100;
inputVal = "hello";
inputVal = [1, 2, 3];
//when we want to use any , it will be any data type
//when use unknown when we do not know what type it is
var inputvalue; //if any then it will work. but "unknown" is not assignable to string
var uName;
inputvalue = 100;
//uName = inputvalue //error in unknown type but ok with any type
console.log(typeof inputvalue);
if (typeof inputvalue == "string") {
    console.log(typeof inputvalue);
    uName = inputvalue;
} //we need manual checking for unknown type

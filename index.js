//Typescript array
var person = ["john", 28, "male", 1000]; // typescript infer person type is (string | number)[]
person.push(true); // error because type infered as string or number, not boolean
var stringArray = [20, "Limon"]; //error because we define type as string array
var mixedArray1 = ["limon", "hello"]; //right in Typescript
var mixedArray2 = [20, "Limon"]; //right in typescript because we define type as string or number array

//Typescript array

let person = ["john", 28, "male", 1000]; // typescript infer person type is (string | number)[]

person.push(true); // error because type infered as string or number, not boolean

let stringArray: string[] = [20, "Limon"]; //error because we define type as string array

let mixedArray1: string[] = ["limon", "hello"]; //right in Typescript

let mixedArray2: (string | number)[] = [20, "Limon"]; //right in typescript because we define type as string or number array

//Typescript Typecasting in tpescript

let fName = <HTMLInputElement>document.getElementById("fName")!;

// let fName = document.getElementById("fName")! as HTMLInputElement; //another way

fName.value = "John";
console.log(fName.value);

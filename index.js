//Typescript function return type
function add(num1, num2) {
    return num1 + num2;
}
// typescript inferred return type as number add(num1: number, num2: number): number
function add2(num1, num2) {
    return (num1 + num2).toString();
} // inferred as string return type. add2(num1: number, num2: number): string
function add3(num1, num2) {
    return "null"; //it will throw error because return type will be object
}
console.log(add2(10, 12));

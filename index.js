//Typescript Tuples
//typescript tuple is a fixed length, ordered collection of elements where each element has a specific type
var employe = [123, "john", 2000, true]; //infered as an array
var employe2 = [123, "john", 2000, true, 200]; //its array type of string ,boolean or string.
//we can add any number of element based on type
var employe3 = [123, "john", 2000, true]; //but it is infered as an Tuple because we set type in ordered formation
//we can only add 4 elements with specific type, five elements are not allowed
console.log(employe3);
//one thing need to memorize
//we get errors in tuple when using reassignment
employe3 = [123, "limon", 200, true]; //its allright in ts
employe3 = ["hello", "limon", 200, true]; //its error because it does not match type order
employe3 = [123, "limon", 200, true, "exceed"]; //its error because element exceed to 5 other than 4
employe3.push(100); // but this is not give you error in push method although tuple allow 4 element ... So its exception

//typescript object
var person = {
    name: "John",
    age: 30,
}; //typescript infer here the type
person = {
    mark: "30", //error in ts but ok in js
    age: 25,
};
//we can assign another object to javascript but not in typescript
//we can not add more property to object in TS but can do in JS
// typescript give error if try to assign different property within obect
person = {
    name: "30",
    age: 25,
    gender: "male", //error in ts but ok in js
};
console.log(person);
var typedObject = {
    age: 30,
    name: "limon",
}; // make type of an object. you can not assign other property or value other than type property
var typedObject2 = {
    age: 30,
    name: "limon",
};
console.log(typedObject2.gender); //error because type object does not specify gender property. TS not sure about this

"use strict";
//Typescript singelton instance using class
class Person {
    constructor() { }
    static getInstance() {
        if (Person._instance) {
            return Person._instance;
        }
        Person._instance = new Person();
        return Person._instance;
    }
}
const person1 = Person.getInstance(); //will give first instance
const person2 = Person.getInstance(); //will again give first instance , not new instance

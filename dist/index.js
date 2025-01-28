"use strict";
//Typescript Interface
// let user1: User;
// user1 = {
//   firstName: "John",
//   lastName: "Smith",
//   greetUser() {
//     console.log("hello user");
//   },
//   getFullName() {
//     return this.firstName + this.lastName;
//   },
// };
//class Admin implements User, Roles {} // can pass multiple interface. Class should have all the method and proeprty of the interface. but have additional method or property as well ....
class Admin {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 40;
    }
    greetUser() {
        console.log("hello admin: " + this.getFullName());
    }
    getFullName() {
        return this.firstName + this.lastName;
    }
}
class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 20;
    }
    greetUser() {
        console.log("hello member: " + this.getFullName());
    }
    getFullName() {
        return this.firstName + this.lastName;
    }
}
function displayGreetMessage(user) {
    user.greetUser();
}
const admin = new Admin("Abdullah", "Limon");
const member = new Member("Rabeya", "Akbor");
displayGreetMessage(admin);
displayGreetMessage(member);

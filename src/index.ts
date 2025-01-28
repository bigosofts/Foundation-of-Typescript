//Typescript Interface

interface Person {
  age: number;
}

interface User extends Person {
  firstName: string;
  lastName: string;

  greetUser(): void;
  getFullName(): string;
} //interface support interfce inheritance but type is not support that

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

class Admin implements User {
  age: number = 40;
  constructor(public firstName: string, public lastName: string) {}
  greetUser() {
    console.log("hello admin: " + this.getFullName());
  }
  getFullName() {
    return this.firstName + this.lastName;
  }
}

class Member implements User {
  age: number = 20;
  constructor(public firstName: string, public lastName: string) {}
  greetUser() {
    console.log("hello member: " + this.getFullName());
  }
  getFullName() {
    return this.firstName + this.lastName;
  }
}

function displayGreetMessage(user: User) {
  user.greetUser();
}

const admin = new Admin("Abdullah", "Limon");
const member = new Member("Rabeya", "Akbor");

displayGreetMessage(admin);
displayGreetMessage(member);

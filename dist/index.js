"use strict";
//Typescript class access modifier
class Employee {
    constructor(name, sal, loc, isEligible, hikePer) {
        this.empName = name;
        this.salary = sal;
        this.baseLocation = loc;
        this.isEligible = isEligible;
        this.hikePercent = hikePer;
    }
}
const employee = new Employee("Abdullah", 30000, "Dhaka", true, 10);
console.dir(employee.baseLocation);

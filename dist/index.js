"use strict";
//Typescript protected modifier
class Employee {
    //public empName: string;
    //private salary: number;
    //readonly baseLocation: string;
    //isEligible: boolean;
    //private hikePercent: number;
    constructor(empName, //if we use access modifier here, we can remove property from above and assignment below as well
    salary, baseLocation, isEligible, hikePercent // another modifier is "protected" . This allow to access property within class and within child class
    ) {
        this.empName = empName;
        this.salary = salary;
        this.baseLocation = baseLocation;
        this.isEligible = isEligible;
        this.hikePercent = hikePercent;
        //this.empName = name;
        // this.salary = sal;
        // this.baseLocation = loc;
        // this.isEligible = isEligible;
        // this.hikePercent = hikePer;
    }
}
const employee = new Employee("Abdullah", 30000, "Dhaka", true, 10);
console.dir(employee.empName);

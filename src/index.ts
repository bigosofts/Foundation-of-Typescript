//Typescript class access modifier

class Employee {
  public empName: string; //by default it is alwas public
  private salary: number;
  readonly baseLocation: string; //only can be read
  isEligible: boolean;
  private hikePercent: number;

  constructor(
    name: string,
    sal: number,
    loc: string,
    isEligible: boolean,
    hikePer: number
  ) {
    this.empName = name;
    this.salary = sal;
    this.baseLocation = loc;
    this.isEligible = isEligible;
    this.hikePercent = hikePer;
  }
}

const employee = new Employee("Abdullah", 30000, "Dhaka", true, 10);

console.dir(employee.baseLocation);

//Typescript Enums Type
//one way to make user role
//------------------------------------
// const ADMIN = 0;
// const READ_ONLY = 1;
// const WRITE_ONLY = 2;
// const READ_WRITE = 3;
// const user = {
//   name: "John",
//   age: 30,
//   gender: "male",
//   role: ADMIN,
// };
//-----------------------------------------
//using Enum
//----------------------------------------
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["READ_ONLY"] = 1] = "READ_ONLY";
    Roles[Roles["WRITE_ONLY"] = 2] = "WRITE_ONLY";
    Roles[Roles["READ_WRITE"] = 3] = "READ_WRITE";
})(Roles || (Roles = {})); // default index 0,1,2,3
var Roles2;
(function (Roles2) {
    Roles2[Roles2["ADMIN"] = 100] = "ADMIN";
    Roles2[Roles2["READ_ONLY"] = 200] = "READ_ONLY";
    Roles2[Roles2["WRITE_ONLY"] = 300] = "WRITE_ONLY";
    Roles2[Roles2["READ_WRITE"] = 400] = "READ_WRITE";
})(Roles2 || (Roles2 = {})); //our custom index
console.log(Roles);
var user = {
    name: "John",
    age: 30,
    gender: "male",
    role: Roles2.ADMIN,
};
if (user.role === Roles2.ADMIN) {
    console.log("This user is admin");
}
//we can access enum bidirectionally like Roles2.ADMIN or Roles2[100]

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
enum Roles {
  ADMIN,
  READ_ONLY,
  WRITE_ONLY,
  READ_WRITE,
} // default index 0,1,2,3

enum Roles2 {
  ADMIN = 100,
  READ_ONLY = 200,
  WRITE_ONLY = 300,
  READ_WRITE = 400,
} //our custom index

console.log(Roles)
const user = {
  name: "John",
  age: 30,
  gender: "male",
  role: Roles2.ADMIN,
};
if (user.role === Roles2.ADMIN) {
  console.log("This user is admin");
}

//we can access enum bidirectionally like Roles2.ADMIN or Roles2[100]

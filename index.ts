//Typescript Literal Type

//value we add in a const variable will be converted to type of that variable called literal type

const str = "Hello World"; //here type is "Hello World" instead of string

let str2 = "Hello World"; //here type string

function roleMessage(role: "admin" | "read" | "read-write") {
  switch (role) {
    case "admin":
      console.log("You have admin permission");
      break;

    case "read":
      console.log("You have Read permission");
      break;
    case "read-write":
      console.log("You have Read write permission");
      break;
    default:
      console.log("Unknown command");
      break;
  }
}

//we use literal type in function parameter . Notice that it is not string , it is named typed

roleMessage("read-write");

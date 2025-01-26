//Typescript Aliases

type stringType = string;

let str: stringType = "string";

type messageType = "admin" | "read" | "read-write";

function roleMessage(role: messageType) {
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

roleMessage("read-write");

type UserType = { firstName: string; lastName: string };

function getFullName(user: UserType) {
  console.log(`${user.firstName} ${user.lastName}`);
}

let user: UserType = { firstName: "Abdullah", lastName: "Al Amin" };

getFullName(user);

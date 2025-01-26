//Typescript Aliases
var str = "string";
function roleMessage(role) {
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
function getFullName(user) {
    console.log("".concat(user.firstName, " ").concat(user.lastName));
}
var user = { firstName: "Abdullah", lastName: "Al Amin" };
getFullName(user);

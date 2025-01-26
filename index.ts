//Typescript Union Type

let user: {
  name: string;
  age: number;
} | null = null; // '|' pipe symbol to make 'or' type called union type

function getUser() {
  const uName = "John";
  const uAge = 28;
  user = {
    name: uName,
    age: uAge,
  };

  return user;
}

console.log(getUser());

function printStatus(message: string, code: string | number) {
  console.log(`${message}. Status Code: ${code}`);
}

printStatus("Successfully done", 200);
printStatus("Successfully done", "200");

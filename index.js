"use strict";
//Typescript Compilation Target
//while lib is commented .lib will automatically inferred in typescript
const button = document.getElementById("button"); //tell TS that button will exist using "!"
button.addEventListener("click", () => {
    console.log("Button is clicked");
});
// while lib is uncommented then it will show error because library need to mention explicitly
const map = new Map();

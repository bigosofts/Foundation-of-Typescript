//Typescript never type
function createError(errormsg, errorcode) {
    throw {
        message: errormsg,
        code: errorcode,
    };
} // when we never want to return a value we can set return type as never type ..Throw will exit function and never return anything
console.log(createError("Something error", 500)); //we see undefined in return type void . but return type never will log nothing

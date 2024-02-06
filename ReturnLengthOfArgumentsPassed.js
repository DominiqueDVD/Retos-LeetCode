//Write a function argumentsLength that returns the count of arguments passed to it.

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

const ejemplo1 = argumentsLength(5);
console.log(ejemplo1);

const ejemplo2 = argumentsLength({}, null, "3");
console.log(ejemplo2);
/*
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.
*/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
 var compose = function(functions) {
    
    return function(x) {
        if(functions.length === 0){
            return x;
        }else{
            return functions.reduceRight((result, fn) => fn(result), x);
        }
        
    }
};

const functions1 = [x => x + 1, x => x * x, x => 2 * x];
const composedFunction1 = compose(functions1);
console.log(composedFunction1(4)); 
const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
const composedFunction2 = compose(functions2);
console.log(composedFunction2(1));

const functions3 = [];
const composedFunction3 = compose(functions3);
console.log(composedFunction3(42)); 
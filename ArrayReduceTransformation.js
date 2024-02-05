/*Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained 
by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation 
on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... 
until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.
*/
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0){
        return init;
    }
    let result = init;

    for(let i = 0; i < nums.length; i++){

        result = fn(result, nums[i]);

    }
    return result;
}

//ejemplo1
const num1 = [1,2,3,4];
const fn1 =  function sum(accum, curr) { return accum + curr; }
const init1 = 0;
console.log(reduce(num1, fn1, init1));

//ejemplo2
const num2 = [1,2,3,4];
const fn2 = function sum(accum, curr) { return accum + curr * curr; }
const init2 = 100;
console.log(reduce(num2, fn2, init2));
//ejmplo3
const num3 = [];
const fn3 = function sum(accum, curr) { return 0; }
const init3 = 25;
console.log(reduce(num3, fn3, init3));
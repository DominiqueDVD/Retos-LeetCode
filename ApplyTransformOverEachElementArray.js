/*Given an integer array arr and a mapping function fn, return a new array with a transformation 
applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method.

Example 1:
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
Example 2:
Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:
Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.

Constraints:
0 <= arr.length <= 1000
-109 <= arr[i] <= 109
fn returns a number
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var returnArray = [];

    for (var i = 0; i < arr.length; i++){
        returnArray[i] = fn(arr[i], i);
    }
    return returnArray;
    
}

//ejemplo 1
var arr1 = [1, 2, 3];
var plusone = function(n){
    return n + 1;
}
var result1 = map(arr1, plusone);
console.log(result1);
//ejemplo 2
var arr2 = [1, 2, 3];
var plusI = function(n, i){
    return n + i;
}
var result2 = map(arr2, plusI);
console.log(result2);

//ejemplo 3
var arr3 = [10, 20, 30];
var constant = function(){
    return 42;
}
var result3 = map(arr3, constant);
console.log(result3);
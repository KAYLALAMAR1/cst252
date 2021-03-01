/**
 * Author:    Kayla Lamar <klamar@csumb.edu>
 * Created:   1 March
 *
 * License: Public Domain
 **/

var mynumbers = [100, 81, 4, 16, 42, 144, 10000];

function isEven(x){
    var results = (x % 2 == 0)
    return results;
}

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 1 even? ", isEven(2));

mynumbers = [100, 81, 4, 16, 42, 144, 10000];
console.log ("My array", mynumbers);

var result = mynumbers.map(isEven);
console.log("Test of evenness of array", result);

var result = mynumbers.map(function(x){
    var results = x ** 0.5
    return results;
})

console.log("Squareroot of array", result);

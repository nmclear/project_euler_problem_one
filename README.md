# Project Euler
## Problem 1: Multiples of 3 and 5

[View Problem Here](https://projecteuler.net/problem=1)

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

*See problem_one.js file for full code*

findMultipleSum(1000) = 233168

```javascript
const findMultipleSum = (limit) => {
    let sum = 0;
    let counter = 3;

    while(counter < limit){
        if(counter % 3 === 0 || counter % 5 === 0){
            sum += counter;
        };
        counter++;
    };

    return sum;
};

findMultipleSum(1000);
// findMultipleSum(1000) = 233168
```# project_euler_problem_one

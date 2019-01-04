// Problem 1

// If we list all the natural numbers below 10 that are multiples
//  of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const PROBLEM_ONE_TEST_VALUES = [
    {limitNum: 10, expectedResult: 23},
    {limitNum: 15, expectedResult: 45},
    {limitNum: 27, expectedResult: 168},
    {limitNum: 50, expectedResult: 543},

];

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

const testFunc = (limitNum, expectedResult) => {
    const result = findMultipleSum(limitNum);
    if(result === expectedResult){
        console.log('Correct');
        return true;
    };

    console.log(`Incorrect! Expected findMultipleSum(${limitNum}) to equal ${expectedResult} but got ${result}`);
    return false;

};

const checkAllTests = (tests) => {
    let allTestsPassed = false;

    tests.forEach(({limitNum, expectedResult }) => {
        const result = testFunc(limitNum, expectedResult);
        if(result){
            return allTestsPassed = true;
        };
        return allTestsPassed = false;
    });

    return allTestsPassed;
};


const getAnswerToProblemOne = () => {
    if(checkAllTests(PROBLEM_ONE_TEST_VALUES)){
        console.log('All tests passed.');
        const sum = findMultipleSum(1000);
        console.log(`The answer to Problem 1 is ${sum}`);
        return sum;
    };
    console.log('One or more tests failed.');
};

getAnswerToProblemOne();

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let newArr = arr.sort();
    let minSum = 0, maxSum = 0;
    for(let i = 0; i < newArr.length - 1; i++){
        minSum+=newArr[i];
    }
    for(let i = 1; i < newArr.length; i++){
        maxSum+=newArr[i];
    }
    console.log(minSum, maxSum);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}


/*
Input:
1 2 3 4 5

Output:
10 14

*/

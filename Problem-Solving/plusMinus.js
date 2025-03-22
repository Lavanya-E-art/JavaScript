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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let n = arr.length, posN = 0, negN = 0 , zeroN = 0;
    for(let i = 0 ; i < n ; i++){
        arr[i] > 0 ? posN += 1 : arr[i] < 0 ? negN += 1 : zeroN += 1;
    }
    console.log((posN/n).toFixed(6));
    console.log((negN/n).toFixed(6));
    console.log((zeroN/n).toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

/*
Input:
6
-4 3 -9 0 4 1

Output:
0.500000
0.333333
0.166667

*/

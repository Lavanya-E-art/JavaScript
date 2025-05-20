'use strict';

const fs = require('fs');

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
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
    // Write your code here
    const remainderCount = new Array(k).fill(0);

    // Count occurrences of each remainder
    for (let num of s) {
        remainderCount[num % k]++;
    }

    let count = 0;

    // At most one element with remainder 0
    if (remainderCount[0] > 0) {
        count += 1;
    }

    // Loop through remainders from 1 to k/2
    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (i === k - i) {
            // Special case: only one element can be chosen if i == k - i
            count += 1;
        } else {
            // Choose the higher count from complementary remainders
            count += Math.max(remainderCount[i], remainderCount[k - i]);
        }
    }

    return count;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const result = nonDivisibleSubset(k, s);

    ws.write(result + '\n');

    ws.end();
}

/*
Input:
4 3
1 7 2 4

Output:
3


*/

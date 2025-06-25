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
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c
 *  3. INTEGER m
 */

function chocolateFeast(n, c, m) {
    // Write your code here
    let totalCandy = 0, wrapper = 0;
    while(n >= c){
        totalCandy += 1;
        wrapper += 1;
        n -= c;
        if(wrapper == m){
            totalCandy += 1;
            wrapper = 1;
        }
    }
    return totalCandy;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const c = parseInt(firstMultipleInput[1], 10);

        const m = parseInt(firstMultipleInput[2], 10);

        const result = chocolateFeast(n, c, m);

        ws.write(result + '\n');
    }

    ws.end();
}

/*
Input:
3
10 2 5
12 4 4
6 2 2

Output:
6
3
5

*/

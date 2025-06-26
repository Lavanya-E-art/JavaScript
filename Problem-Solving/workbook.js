//Lisa's Workbook
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
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY arr
 */

function workbook(n, k, arr) {
    // Write your code here
    let usedPages = 0;
    let specialCount = 0;
    for (let i = 0; i < arr.length; i++) {
        const numOfQuestions = arr[i];
        const pagesNeeded = Math.ceil(numOfQuestions / k);
        for (let j = 0; j < pagesNeeded; j++) {
             const pageNum = usedPages + j + 1;
             const startIndex = j * k + 1;
             const endIndex = Math.min(startIndex + k - 1, numOfQuestions);
             if (pageNum >= startIndex && pageNum <= endIndex) {
                specialCount++;
             }
        } 
        usedPages += pagesNeeded;
    }
    return specialCount;
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = workbook(n, k, arr);

    ws.write(result + '\n');

    ws.end();
}


/*
Input:
5 3
4 2 6 1 10

Output:
4



*/

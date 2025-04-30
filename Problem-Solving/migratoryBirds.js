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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let maxValue = 0 , maxKey = Number.MAX_VALUE;
    let freqMap = new Map();
    for (const element of arr) {
        let count = (freqMap.get(element) || 0) + 1;
        freqMap.set(element, count);
        
        if(maxValue < count || maxValue == count && element < maxKey){
            maxValue = count;
            maxKey = element;
        }
    }
    
    return maxKey;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}

/*
Input:
6
1 4 4 4 5 3

Output:
4


*/

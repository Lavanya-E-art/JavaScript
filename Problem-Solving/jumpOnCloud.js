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
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0, i = 0;
    while(i < c.length){
        if(c[i+2] === 0){
            jumps += 1;
            i += 2;
        }else if(c[i+1] === 0){
            jumps += 1;
            i += 1;
        }else{
            i += 1;
        }
    }
    return jumps;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    const result = jumpingOnClouds(c);

    ws.write(result + '\n');

    ws.end();
}


/*
Input:
7
0 0 1 0 0 1 0

Output:
4


*/

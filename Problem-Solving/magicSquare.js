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
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function formingMagicSquare(s) {
    // Write your code here
    const square1 =  [[8, 1, 6], [3, 5, 7], [4, 9, 2]];

    const square2 =  [[6, 1, 8], [7, 5, 3], [2, 9, 4]];

    const square3 =  [[4, 9, 2], [3, 5, 7], [8, 1, 6]];

    const square4 =  [[2, 9, 4], [7, 5, 3], [6, 1, 8]];

    const square5 =  [[8, 3, 4], [1, 5, 9], [6, 7, 2]];

    const square6 =  [[4, 3, 8], [9, 5, 1], [2, 7, 6]];

    const square7 =  [[6, 7, 2], [1, 5, 9], [8, 3, 4]];

    const square8 =  [[2, 7, 6], [9, 5, 1], [4, 3, 8]];
    
    const sqrs = [square1, square2, square3, square4, square5, square6, square7, square8]; 
    
    let cost = 70;  
    
    for(let sqr of sqrs) {
        cost = Math.min(cost, calCost(sqr, s)); 
    }
    
   return cost;
}

function calCost(m, s) {
    let c = 0; 
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            c += Math.abs(m[i][j] - s[i][j]); 
        }
    }
    return c; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    ws.write(result + '\n');

    ws.end();
}

/*
Input:
4 9 2
3 5 7
8 1 5

Output:
1

*/

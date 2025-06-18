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
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    // Write your code here
    let rowCount = Math.floor(Math.sqrt(s.length));
    let col = Math.ceil(Math.sqrt(s.length));
    let row = s.length > rowCount * col ? (rowCount + 1) : rowCount ;
    let wordsArr = [];
    let encryptedArr = [];
    for(let i = 0 ; i < row ; i++){
        wordsArr.push(s.split("").splice(i*col,col));
    }
    for(let i = 0; i < col; i++){
        const newWord = [];
        wordsArr.forEach(item=>newWord.push(item[i]));
        encryptedArr.push(newWord.join(''));
    }  
    return encryptedArr.join(' ');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = encryption(s);

    ws.write(result + '\n');

    ws.end();
}

/*
Input:
haveaniceday

Output:
hae and via ecy


*/

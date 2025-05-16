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
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    // Write your code here
    let totalLength = s.length + t.length;
    for (let i = 0; i < s.length && i < t.length && s.charAt(i) == t.charAt(i); i++) {
        totalLength -= 2;
    } //see which letters they have in common

    if (totalLength > k || (t.length > s.length && (totalLength % 2 != 0))) {
        return "No"; //if more than k moves are required to achieve the string
    }
    return "Yes";

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = appendAndDelete(s, t, k);

    ws.write(result + '\n');

    ws.end();
}


/*
Input:
hackerhappy
hackerrank
9

Output:
Yes


*/

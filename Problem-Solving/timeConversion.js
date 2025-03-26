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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let [time, part] = [s.substring(0, s.length - 2), s.substring(s.length - 2)];
    time = time.split(":").map(Number);
    if (part === "PM" && time[0] === 12) time[0] = 12;
    if (part === "PM" && time[0] !== 12) time[0] = (time[0] + 12) % 24;
    if (part === "AM" && time[0] === 12) time[0] = 0;
    return time
    .map(String)
    .map(s => s.padStart(2, "0"))
    .join(":");
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

/*
Input:
07:05:45PM

Output:
19:05:45


*/

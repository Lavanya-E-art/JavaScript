//Taum and B'day
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
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(b, w, bc, wc, z) {
    // Write your code here
    b = BigInt(b);
    w = BigInt(w);
    bc = BigInt(bc);
    wc = BigInt(wc);
    z = BigInt(z);

    const bp = BigInt(Math.min(Number(bc), Number(wc + z)));
    const wp = BigInt(Math.min(Number(wc), Number(bc + z)));
    return bp * b + wp * w;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const b = parseInt(firstMultipleInput[0], 10);

        const w = parseInt(firstMultipleInput[1], 10);

        const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const bc = parseInt(secondMultipleInput[0], 10);

        const wc = parseInt(secondMultipleInput[1], 10);

        const z = parseInt(secondMultipleInput[2], 10);

        const result = taumBday(b, w, bc, wc, z);

        ws.write(result + '\n');
    }

    ws.end();
}

/*
Input:
5
10 10
1 1 1
5 9
2 3 4
3 6
9 1 1
7 7
4 2 1
3 3
1 9 2

Output:
20
37
12
35
12


*/

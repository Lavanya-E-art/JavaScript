//Flatland Space Stations
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    c.sort((a,b) => a - b);
    let res = 0;
    res = Math.max(res , c[0] - 0);
    for(let i = 1 ; i < c.length ; i++){
        res = Math.max(res , Math.floor((c[i] - c[i-1])/2));
    }
    res = Math.max(res , (n - 1) - c[c.length - 1]);
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = flatlandSpaceStations(n, c);

    ws.write(result + "\n");

    ws.end();
}


/*
Input:
5 2
0 4

Output:
2

*/

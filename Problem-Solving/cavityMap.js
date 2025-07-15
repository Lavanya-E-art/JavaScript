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
 * Complete the 'cavityMap' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function cavityMap(grid) {
    // Write your code here
    const n = grid.length;
    const result = [...grid]; // Copy the original grid

    for (let i = 1; i < n - 1; i++) {
        let row = result[i].split('');
        for (let j = 1; j < n - 1; j++) {
            const cell = grid[i][j];
            if (
                cell > grid[i - 1][j] &&
                cell > grid[i + 1][j] &&
                cell > grid[i][j - 1] &&
                cell > grid[i][j + 1]
            ) {
                row[j] = 'X'; // Mark cavity
            }
        }
        result[i] = row.join('');
    }

    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    const result = cavityMap(grid);

    ws.write(result.join('\n') + '\n');

    ws.end();
}


/*
Input:
4
1112
1912
1892
1234

Output:
1112
1X12
18X2
1234


*/

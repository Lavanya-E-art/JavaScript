//Organizing Containers of Balls
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
 * Complete the 'organizingContainers' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts 2D_INTEGER_ARRAY container as parameter.
 */

function organizingContainers(container) {
    // Write your code here
    let containerMap = {};
    let itemMap = {};
    let result = [];
    for (let i = 0; i < container.length; i++) {
        let containerCount = 0;
        let itemCounts = container[i];
        for (let j = 0; j < itemCounts.length; j++) {
            let itemCount = itemCounts[j];
            containerCount += itemCount;
            if (!itemMap[j]) itemMap[j] = 0;
                itemMap[j] += itemCount;
        }
        if (!containerMap[containerCount]) containerMap[containerCount] = 0;
            containerMap[containerCount]++;
    }
        
    let possible = true;
    for (let key in itemMap) {
        let count = itemMap[key];
        if (!containerMap[count]) {
            possible = false;
            break;
        }
        containerMap[count]--;
    }
        
    if (possible) {
        result.push('Possible');
    } else {
        result.push('Impossible');
    }
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        let container = Array(n);

        for (let i = 0; i < n; i++) {
            container[i] = readLine().replace(/\s+$/g, '').split(' ').map(containerTemp => parseInt(containerTemp, 10));
        }

        const result = organizingContainers(container);

        ws.write(result + '\n');
    }

    ws.end();
}

/*
Input:
2
2
1 1
1 1
2
0 2
1 1

Output:
Possible
Impossible



*/

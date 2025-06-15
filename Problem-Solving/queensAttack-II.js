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
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here
    let left = c_q - 1;
    let right = n - c_q;
    let above = n - r_q;
    let below = r_q - 1;
    let above_left = Math.min(above, left);
    let above_right = Math.min(above, right);
    let below_left = Math.min(below, left);
    let below_right = Math.min(below, right);
    
    for(let i = 0 ; i < k ; i++){
        let r_Ob = obstacles[i][0];
        let c_Ob = obstacles[i][1];
        if(r_Ob === r_q){
            if(c_Ob < c_q){
                left = Math.min(left, c_q - c_Ob - 1);
            }else {
                right = Math.min(right, c_Ob - c_q - 1);
            }
        }else if (c_Ob === c_q) {
            if (r_Ob < r_q) {
                below = Math.min(below, r_q - r_Ob - 1);
            } else {
                above = Math.min(above, r_Ob - r_q - 1);
            }
        } else if (r_Ob - c_Ob === r_q - c_q) {
            if (c_Ob < c_q) {
                below_left = Math.min(below_left, c_q - c_Ob - 1);
            } else {
                above_right = Math.min(above_right, c_Ob - c_q - 1);
            }
        } else if (r_Ob + c_Ob === r_q + c_q) {
            if (c_Ob < c_q) {
                above_left = Math.min(above_left, c_q - c_Ob - 1);
            } else {
                below_right = Math.min(below_right, c_Ob - c_q - 1);
            }
        }
    }
    
    return left + right + above + below + above_left + below_left + above_right + below_right;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const r_q = parseInt(secondMultipleInput[0], 10);

    const c_q = parseInt(secondMultipleInput[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().replace(/\s+$/g, '').split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    const result = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + '\n');

    ws.end();
}


/*
Input:
5(n) 3(k)
4(r_q) 3(c_q)
5(r_Ob) 5(c_Ob)
4 2
2 3


Output:
10


*/

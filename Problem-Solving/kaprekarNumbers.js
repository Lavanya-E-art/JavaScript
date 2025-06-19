//Modified Kaprekar Numbers
'use strict';

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
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */
function isKaprekarNumber(n){
    const nSquared = (n * n).toString();
    const d = n.toString().length;

    const right = nSquared.slice(-d); // Last 'd' digits
    const left = nSquared.slice(0, nSquared.length - d); // Remaining left part

    const leftNum = left === "" ? 0 : parseInt(left, 10);
    const rightNum = parseInt(right, 10);

    return (leftNum + rightNum) === n;
}

function kaprekarNumbers(p, q) {
    // Write your code here
    const results = [];
    for (let i = p; i <= q; i++) {
        if (isKaprekarNumber(i)) {
            results.push(i);
        }
    }
    if(results.length > 0){
        console.log(results.join(" "));
    }else{
        console.log("INVALID RANGE");
    }
}

function main() {
    const p = parseInt(readLine().trim(), 10);

    const q = parseInt(readLine().trim(), 10);

    kaprekarNumbers(p, q);
}

/*
Input:
1
100

Output:
1 9 45 55 99

*/

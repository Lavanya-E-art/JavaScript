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



function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
    let totalSwaps = 0;
    for(let i = 0 ; i < n ; i++){
        let numberOfSwaps = 0;
        for(let j = 0 ; j < n-1 ; j++){
            if(a[j] > a[j+1]){
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                numberOfSwaps++;
            }
        }
        totalSwaps += numberOfSwaps;
        if(numberOfSwaps == 0){
            break;
        }
    }
    console.log("Array is sorted in",totalSwaps,"swaps.");
    console.log("First Element:",a[0]);
    console.log("Last Element:",a[n-1]);
}

/*
Input:
3
1 2 3

Output:
Array is sorted in 0 swaps.
First Element: 1
Last Element: 3


*/

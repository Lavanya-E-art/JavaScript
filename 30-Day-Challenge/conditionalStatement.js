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
    const N = parseInt(readLine().trim(), 10);
    if(N % 2 == 0){
        if( N >= 2 && N <= 5){
            console.log("Not Weird");
        }
        if(N >= 6 && N <= 20){
            console.log("Weird");
        }
        if(N > 20){
            console.log("Not Weird");
        }
    }else{
        console.log("Weird");
    }
}


/*
Input:
3

Output:
Weird


*/

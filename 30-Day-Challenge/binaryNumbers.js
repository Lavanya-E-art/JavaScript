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
    let max = 0;
    let binN = n.toString(2).split(0);
    for(let i = 0; i < binN.length ; i++){
        if(max < binN[i].length){
            max = binN[i].length;
        }
    } 
    console.log(max);
}

/*
Input:
5

Output:
1


*/

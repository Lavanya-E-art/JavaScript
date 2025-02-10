'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
        case new Set(["a", "e", "i", "o", "u"]).has(s.charAt(0)):
            letter = "A";
            break;
        case new Set(["b", "c", "d", "f", "g"]).has(s.charAt(0)):
            letter = "B";
            break;
        case new Set(["h", "j", "k", "l", "m"]).has(s.charAt(0)):
            letter = "C";
            break;
        default:
            letter = "D";
    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}

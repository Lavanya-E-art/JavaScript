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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowel = ['a','e','i','o','u'];
    let conArr = [];
    for(let i=0;i<s.length;i++){
        if(vowel.includes(s[i])){
            console.log(s[i]);
        }else{
            conArr.push(s[i]);
        }
    }
    for(let j=0;j<conArr.length;j++){
        console.log(conArr[j]);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}

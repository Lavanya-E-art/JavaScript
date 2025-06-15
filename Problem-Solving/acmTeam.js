//ACM ICPC Team
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
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function acmTeam(topic) {
    // Write your code here
    let max = 0; // max topic that the team know 
    let count = 0; // the team which knows the max topics 
    
    for(let i = 0; i < topic.length; i++) { 
        for(let j = i + 1; j < topic.length; j++) {
            let know = 0; 
            for(let k = 0; k < topic[0].length; k++) {
                if(topic[i][k] === '1' || topic[j][k] === '1'){
                    know += 1; 
                }
            }
            
            if(know > max) {
                max = know; 
                count = 1; // reset the count for the nex max
            }
            else if(know === max){
                count += 1; // otherwise increase the count, we found another max 
            }
        }
    }
    return [max, count]; 

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let topic = [];

    for (let i = 0; i < n; i++) {
        const topicItem = readLine();
        topic.push(topicItem);
    }

    const result = acmTeam(topic);

    ws.write(result.join('\n') + '\n');

    ws.end();
}


/*
Input:
4 5
10101
11100
11010
00101

Output:
5
2


*/

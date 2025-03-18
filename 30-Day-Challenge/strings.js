function processData(input) {
    //Enter your code here
    let even = "" , odd = "";
    let str = input.split("\n");
    let n = str[0];
    for(let i = 1 ; i <= n ; i++){
        let eachStr = str[i].trim().split("");
        for(let j = 0 ; j < eachStr.length ; j++){
            if(j % 2 == 0){
                even = even.concat(eachStr[j]);
            }else{
                odd = odd.concat(eachStr[j]);
            }
        }
        console.log(even,odd);
        even = "" , odd = "";
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

/*
Input:
2
Hacker
Rank

Output:
Hce akr
Rn ak

*/

function processData(input) {
    //Enter your code here
    let inputArr = input.split("\n").slice(1);
    for(let i = 0 ; i < inputArr.length ; i++){
        console.log(isPrime(inputArr[i]) ? "Prime":"Not prime");
    }
} 

function isPrime(n){
    if(n <= 1) return false;
    for(let i = 2 ; i <= Math.sqrt(n) ;i++){
        if(n % i === 0) return false;
    }
    return true;
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
3
12
5
7

Output:
Not prime
Prime
Prime


*/

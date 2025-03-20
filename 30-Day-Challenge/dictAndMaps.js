function processData(input) {
    //Enter your code here
    let inputArr = input.split("\n");
    let noOfData = parseInt(inputArr[0]);
    let phoneBook = {};
    for(let i = 1 ; i <= noOfData ; i++){
        let [name, number] = inputArr[i].split(" ");
        phoneBook[name] = number;
    }
    for(let j = noOfData+1 ; j < inputArr.length ; j++){
        if(phoneBook[inputArr[j]]){
            console.log(`${inputArr[j]}=${phoneBook[[inputArr[j]]]}`);
        }else{
            console.log("Not found");
        }
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
3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry

Output:
sam=99912222
Not found
harry=12299933


*/

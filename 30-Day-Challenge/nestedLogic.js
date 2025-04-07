function processData(input) {
    //Enter your code here
    let [returnDate, dueDate] = input.split("\n");
    let rDate = returnDate.split(" ").map(Number);
    let dDate = dueDate.split(" ").map(Number);
    let fine = 0;
    if(rDate[2] > dDate[2]){
        fine = 10000;
    }else if(rDate[2] == dDate[2] && rDate[1] > dDate[1]){
        fine = 500 * (rDate[1] - dDate[1]);
    }else if(rDate[2] == dDate[2] && rDate[1] == dDate[1] && rDate[0] > dDate[0]){
        fine = 15 * (rDate[0] - dDate[0]);
    }
    console.log(fine);
    
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
9 6 2015
6 6 2015

Output:
45


*/

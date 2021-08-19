const opsTry = ["5","-2","4","C","D","9","+","+"];

var calPoints = function(ops) {
    var arr = [];
    let sum = 0;
    if(ops.length === 1) {
        return Number(ops[0]);
    }
    for (var i =0 ; i < ops.length ; i++) {
        switch(ops[i]) {
            case "C" :
                arr.pop();
                break;
            case "D" :
                arr.push(arr[arr.length-1]*2);
                break;
            case "+" :
                arr.push(arr[arr.length-1]+arr[arr.length -2]);
                break;
            default :
                arr.push(Number(ops[i]));
        }
    }
    for(var j= 0 ;j < arr.length ; j++) {
       sum += arr[j]; 
    }
    return sum;
};

const solution = calPoints(opsTry);
console.log(solution);
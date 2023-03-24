//find the sum of n numbers using recursion

let num=20;

function sumOfNum(num){
    //base case
    if(num<=0) return 0
//recusion
    return num+sumOfNum(num-1)


}
console.log(sumOfNum(num))
//tc=o(1)
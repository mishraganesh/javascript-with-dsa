function fib(num){
    //base
    if(num===0) return 0;
    else if (num===1) return 1;
    //recursive case

    return fib(num-1)+fib(num-2)
}
console.log(fib(6))
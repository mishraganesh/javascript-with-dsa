function allPrime(num){
    let check=true;
    for(let i=2; i*i<=num;i++){
        if(num%i===0){
            check=false;
            break;
        }
    }
    if(num===1) return false;
    else if(check===true) return true;
    else return false;
    
    //print all primes till n

    
}
let num=500;
    let arr=[];

    for(let i=2; i<=num; i++){
        if(allPrime(i)){
            arr.push(i)
        }
    }
console.log(arr)
function powerFun(a,b){
    //base
    if(b===0) return 1

    return a*powerFun(a,b-1)
}
console.log(powerFun(0,5))
function product(arr,i){
    if(i==arr.length) return 1

    return arr[i]*product(arr,i+1)
}
console.log(product([2,5,4],1))
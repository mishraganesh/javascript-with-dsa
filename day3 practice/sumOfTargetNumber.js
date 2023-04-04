//find sum of target number
function count(arr,k){
    let ans=0;
    var mp=new Map()
    for(let i=0; i<arr.length; i++){
        let x=arr[i];
        let y=k-x;
        if(mp.has(y)){
            ans=mp.get(y)
        }
       if(mp.has(x)){
        mp.set(x,mp.get(x)+1)
       }
       else{
        mp.set(x,1)
       }
    }
    return ans
}
console.log(count([5,5,8,2,5,5],10))
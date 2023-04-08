//reduce complexity with the using two pointer

function findPair(arr){
    let left=0;
    let right=arr.length-1;

    while(left<right){
     let sum=arr[left]+arr[right];
     if(sum===0){
        return [arr[left,right],arr[right]];
     }
     else if(sum>0){
        right--;
     }else{
        left++
     }
    }
}
const result=findPair([-2,-1,0,1,2,3,4]);
console.group(result)